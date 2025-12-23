import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useFonts, Barlow_400Regular } from '@expo-google-fonts/barlow';

export default function ErrorMessage({
  text,
  style,
}) {
  const [fontsLoaded] = useFonts({ Barlow_400Regular });
  if (!fontsLoaded) return null;

  return (
    <Text style={[styles.muted, style]}>
      {text}{' '}
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
});
