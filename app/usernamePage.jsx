import {View, StyleSheet as RNStyleSheet, Image } from 'react-native';
import colors from './theme/signInPageColors';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './components/SignIn/SignIncard/SignInPageStyles'; 
import UsernameCard from './components/UsernamePage/UsernameCard/UsernameCard';
import GoogleSignInSection from './components/SignIn/GoogleSignInOption/GoogleSignInSection';
import AuthFooterLink from './components/SignIn/AltSignInSignOutOption/AltAuthLinkPath';
import UsernameHeader from './components/UsernamePage/UsernameHeader/UsernameHeader';
import BackButton from './components/SignIn/BackButton/BackButton';
import { Animated, Easing } from 'react-native';
import React, { useRef, useState } from 'react';
import { validateUsername } from '../utils/usernameValidation';


const UsernamePage = () => {
  const [username, setUsername] = useState('');
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [usernameError, setUsernameError] = useState(null);

  // handle username validation and submission
  const handleSubmit = async () => { 
    try {
      validateUsername(username);
    } catch (error) {
      console.log("CAUGHT ERROR:", error.message);
      setUsernameError(error.message); 
      return; 
    }
    console.log('submit', {username});
  };

  // handle username input change so we can handle ui updates (error message)
  const handleUsernameChange = (text) => {
    setUsername(text);
    if (usernameError) setUsernameError(null);   // remove error immediately
  };

  // Check if username is valid
  const isUsernameValid = () => {
    try {
      validateUsername(username);
      return true;
    } catch {
      return false;
    }
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

            <UsernameHeader
              title="My Username Is ..."
            /> 

            <UsernameCard
            username={username}
            onChangeUsername={handleUsernameChange}
            onSubmit={handleSubmit}
            
            submitDisabled={!username}
            usernameError={usernameError}    
            />


        </View>

      </View>
    </SafeAreaView>
  );
};

export default UsernamePage;
