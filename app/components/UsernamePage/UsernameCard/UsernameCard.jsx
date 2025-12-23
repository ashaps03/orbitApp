import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useFonts, Barlow_400Regular, Barlow_500Medium, Barlow_600SemiBold, Barlow_700Bold } from '@expo-google-fonts/barlow';
import UsernameNextButton from '../UsernameNext/UsernameNext';
import AuthField from '../AuthField/AuthField';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export default function UsernameCard({
  username,
  onChangeUsername,
  onSubmit,
  submitDisabled = false,
  usernameError, 
}) {
  const [fontsLoaded] = useFonts({
    Barlow_400Regular,
    Barlow_500Medium,
    Barlow_600SemiBold,
    Barlow_700Bold,
  });
  if (!fontsLoaded) return null;

  return (
    <View style={styles.outer}>

      <View style={styles.card}>
        
        {/* AuthField component for username input */}
        <AuthField
        //   label="Username"
          value={username}
          onChangeText={onChangeUsername}
          placeholder="Enter username"
          keyboardType="default"
          autoCapitalize="none"
          textContentType="username"
          hasError={!!usernameError}   
        />

        {usernameError && (

        <ErrorMessage 
          text={usernameError}
          style={{ marginBottom: 8}} // optional color override
        />
      )}


        {/* Next Button  */}
        <UsernameNextButton
          title="Next"
          onPress={onSubmit}
          disabled={submitDisabled}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  card: {
    width: '100%',
    maxWidth: 380,
    padding: 16,
    borderRadius: 12,
    borderColor: 'transparent',
    // shadowColor: '#000',
    // shadowOpacity: 0.12,
    // shadowRadius: 8,
    // shadowOffset: { width: 0, height: 4 },
    // elevation: 3,
  },
});
