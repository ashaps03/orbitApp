import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { signInWithCredential, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase";

WebBrowser.maybeCompleteAuthSession();

// Setup Google signin
export function useGoogleAuth() {
    const [request, response, promptAsync] = Google.useAuthRequest({
        webClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
        iosClientId: process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID,
        androidClientId: process.env.EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID,
    });

    // On button tap for Google signin
    const signInWithGoogle = async () => {
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