import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useFonts, Barlow_400Regular, Barlow_500Medium, Barlow_600SemiBold, Barlow_700Bold } from '@expo-google-fonts/barlow';
import SignInButton from '../SignInButton/SignInButton';
import AuthField from '../AuthField/AuthField';

export default function SignInCard({
  email,
  onChangeEmail,
  password,
  onChangePassword,
  onSubmit,
  submitDisabled = false,
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
        
        {/* This is the animated fill layer that creates the press effectUsing AuthField component for email and password inputs */}
        <AuthField
          label="Email"
          value={email}
          onChangeText={onChangeEmail}
          placeholder="Emmy@gmail.com"
          keyboardType="email-address"
          autoCapitalize="none"
          textContentType="emailAddress"
        />

        {/* Using AuthField component for email and password inputs */}
        <AuthField
          label="Password"
          value={password}
          onChangeText={onChangePassword}
          placeholder="••••••••"
          secureTextEntry
          autoCapitalize="none"
          textContentType="password"
        />

        {/* Sign In Button  */}
        <SignInButton
          title="Sign In"
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
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
});
