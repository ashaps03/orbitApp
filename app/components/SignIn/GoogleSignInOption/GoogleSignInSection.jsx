import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useFonts, Barlow_600SemiBold } from '@expo-google-fonts/barlow';
import styles from './GoogleSignInSectionStyles';
import googleLogo from '../../../../assets/googleLogo.png';

export default function GoogleSignInSection({
  onGooglePress,
  style,
  text = 'Or',
}) {
  const [fontsLoaded] = useFonts({ Barlow_600SemiBold });
  if (!fontsLoaded) return null;

  return (
    <View style={[styles.container, style]}>
      <View style={styles.dividerRow}>
        <View style={styles.line} />
        <Text style={styles.orText}>{text}</Text>
        <View style={styles.line} />
      </View>

      <TouchableOpacity
        activeOpacity={0.85}
        onPress={onGooglePress}
        style={styles.googleOuter}
      >
        <View style={styles.googleInner}>
        <Image source={googleLogo} style={styles.googleIcon} resizeMode="contain" />
        </View>
      </TouchableOpacity>
    </View>
  );
}
