import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { useFonts, Barlow_400Regular } from '@expo-google-fonts/barlow';

// This is the alternative link path component used 
export default function AuthFooterLink({
  text,
  linkText,
  href,
  style,
}) {
  const [fontsLoaded] = useFonts({ Barlow_400Regular });
  if (!fontsLoaded) return null;

  const handlePress = () => {
    console.log("User redirected to the Sign Up page");
  };

  // Can set the link and text via props (In this case we are doing it through the SignIn page)
  return (
    <Text style={[styles.muted, style]}>
      {text}{' '}
      <Link href={href} style={styles.link} onPress={handlePress}>
        {linkText}
      </Link>
    </Text>
  );
}

const styles = StyleSheet.create({
  muted: {
    fontSize: 12,
    fontFamily: 'Barlow_400Regular',
    color: '#6b7280',
    textAlign: 'center',
  },
  link: {
    fontSize: 12,
    color: '#805CFF',
    fontWeight: '500',
    textAlign: 'center',
  },
});
