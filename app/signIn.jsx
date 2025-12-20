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


const SignIn = () => {
  const handleGoogleSignIn = () => { //Connect to firebase later
    console.log('Google Sign-In button pressed');
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const fadeAnim = useRef(new Animated.Value(0)).current;


  const handleSubmit = async () => { 
    //Connect to firebase later
    console.log('submit', { email, passwordLength: password.length });
  };

  return (
    <SafeAreaView style={styles.safe} edges={[]}>
      <View style={styles.container}>

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
        
        <BackButton
          icon={require('../assets/BackIcon.png')}
          style={{ alignSelf: 'flex-start', marginBottom: 15, marginLeft: 20 }}
        />

        <AuthHeader
          title="Sign in"
          subtitle="to your account"
          caption="Welcome back you've been missed"
        />

        <SignInCard
          email={email}
          onChangeEmail={setEmail}
          password={password}
          onChangePassword={setPassword}
          onSubmit={handleSubmit}
          submitDisabled={!email || !password}
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
