import { doc, runTransaction, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

// Handle duplicate usernames
export class UsernameTakenError extends Error {
    constructor() {
        super("Username is already taken.");
        this.name = "UsernameTakenError";
    }
}

// Handle other errors
export class UsernameSaveError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "UsernameSaveError";
    }
}

// Save a username
export async function saveUsername(userId: string, rawUsername: string) {
    const username = rawUsername.trim().toLowerCase();

    // Validate username
    if (!username) {
        throw new UsernameSaveError("Username cannot be empty.");
    }
    if (username.length < 3) {
        throw new UsernameSaveError("Username must be at least 3 characters.");
    }
    if (!/^[a-z0-9_]+$/.test(username)) {
        throw new UsernameSaveError("Username can only contain letters, numbers, and underscores.");
    }

    const usernameRef = doc(db, "usernames", username);
    const userRef = doc(db, "users", userId);

    try {
        await runTransaction(db, async (tx) => {

            // Prevent duplicate usernames
            const existing = await tx.get(usernameRef);
            if (existing.exists()) {
                throw new UsernameTakenError();
            }

            // Reserve username
            tx.set(usernameRef, {
                userId,
                createdAt: serverTimestamp()
            });
            
            // Attach username to user document
            tx.set(
                userRef,
                {
                    username,
                    updatedAt: serverTimestamp()
                },
                { merge: true }
            );
        });

        return { ok: true, username };
    }
    catch (err: any) {
        if (err instanceof UsernameTakenError) {
            throw err;
        }
        
        throw new UsernameSaveError(err?.message || "Failed to save username. Please try again.");
    }
}