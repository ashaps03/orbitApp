import {View, StyleSheet as RNStyleSheet, Image } from 'react-native';
import colors from './theme/signInPageColors';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './components/SignIn/SignIncard/SignInPageStyles'; 
import SignInCard from './components/SignIn/SignIncard/SignInCard'
import GoogleSignInSection from './components/SignIn/GoogleSignInOption/GoogleSignInSection';
import AuthFooterLink from './components/SignIn/AltSignInSignOutOption/AltAuthLinkPath';
import AuthHeader from './components/SignIn/AuthHeader/AuthHeader';
import BackButton from './components/SignIn/BackButton/BackButton';
import { Animated, Easing } from 'react-native';
import React, { useRef, useState } from 'react';
import { validateEmail } from '../utils/emailValidation';
import { useGoogleAuth } from "./services/googleAuth";


const SignIn = () => {

  // Connect to Firebase for Google signin
  const { signInWithGoogle, disabled } = useGoogleAuth();
  const handleGoogleSignIn = async () => {
    try {
      const userCredential = await signInWithGoogle();
      console.log("Google sign-in success:", userCredential.user.uid);
    } catch (error) {
      console.error("Google sign-in failed:", error.message);
    }
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [emailError, setEmailError] = useState(null);



  // handle email validation and submission
  const handleSubmit = async () => { 
    try {
      validateEmail(email);
    } catch (error) {
      console.log("CAUGHT ERROR:", error.message);
      setEmailError(error.message); 
      return; 
    }
    console.log('submit', { email, passwordLength: password.length });
  };

  // handle email input change so we can handle ui updates (error message)
  const handleEmailChange = (text) => {
    setEmail(text);
    if (emailError) setEmailError(null);   // remove error immediately
  };
  
  

  return (
    <SafeAreaView style={styles.safe} edges={[]}>
      <View style={styles.container}>

      {/* animating images */}
      <Animated.Image
        source={require('../assets/SignInBackground.png')}
        style={[
          styles.gradientImage,
          { opacity: fadeAnim },
        ]}
        resizeMode="cover"
        pointerEvents="none"
        onLoadEnd={() => {
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 250,
            useNativeDriver: true,
          }).start();
        }}
      />
        
        {/*foreground*/}
        <View style={styles.content}>
        
        {/* components */}
        <BackButton style={{ alignSelf: 'flex-start', marginLeft: 20 }} />


        <AuthHeader
          title="Sign in"
          subtitle="to your account"
          caption="Welcome back, you've been missed"
        />

        <SignInCard
          email={email}
          onChangeEmail={handleEmailChange}
          password={password}
          onChangePassword={setPassword}
          onSubmit={handleSubmit}
          
          submitDisabled={!email || !password}
          emailError={emailError}    
        />

        <AuthFooterLink
          text="Don’t have an account?"
          linkText="Sign up"
          href="/signUp"
        />
        <GoogleSignInSection onGooglePress={handleGoogleSignIn}/>

        </View>

      </View>
    </SafeAreaView>
  );
};

export default SignIn;
