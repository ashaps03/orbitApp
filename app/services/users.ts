import { doc, runTransaction, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

export class UsernameTakenError extends Error {
    constructor() {
        super("Username is already taken.");
        this.name = "UsernameTakenError";
    }
}

export class UsernameSaveError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "UsernameSaveError";
    }
}

export async function saveUsername(userId: string, rawUsername: string) {

}