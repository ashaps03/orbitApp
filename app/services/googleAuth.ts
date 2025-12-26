import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { signInWithCredential, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase";

WebBrowser.maybeCompleteAuthSession();

const GOOGLE_CLIENT_ID = process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID!;

// Setup Google signin
export function useGoogleAuth() {
    const [request, response, promptAsync] = Google.useAuthRequest({
        clientId: GOOGLE_CLIENT_ID,
    });

    // On button tap for Google signin
    async function signInWithGoogle() {
        const result = await promptAsync();

        // User closed Google signin dialog or error occurred
        if (result.type !== "success") {
            throw new Error("Google sign-in was cancelled");
        }

        // Google successfully returns an ID token
        const { id_token } = result.params;
        if (!id_token) {
            throw new Error("No Google ID token returned");
        }

        // From Google ID token to Firebase credential. Signin to Firebase
        const credential = GoogleAuthProvider.credential(id_token);
        return signInWithCredential(auth, credential);
    }

    return {
        signInWithGoogle,
        disabled: !request,
    }
}