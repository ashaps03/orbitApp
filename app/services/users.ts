import { doc, runTransaction, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

const USERNAME_MIN_LENGTH = 3;
const USERNAME_MAX_LENGTH = 20;

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
    const username = rawUsername.trim().toLowerCase(); // Normalize username

    // Validate username
    if (!username) {
        throw new UsernameSaveError("Username is required.");
    }
    if (username.length < USERNAME_MIN_LENGTH) {
        throw new UsernameSaveError(`Username must be at least ${USERNAME_MIN_LENGTH} characters.`);
    }
    if (username.length > USERNAME_MAX_LENGTH) {
        throw new UsernameSaveError(`Username must be at most ${USERNAME_MAX_LENGTH} characters.`);
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