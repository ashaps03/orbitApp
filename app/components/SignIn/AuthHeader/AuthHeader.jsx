import React from 'react';
import { View, Text } from 'react-native';
import {
  useFonts,
  Barlow_500Medium,
  Barlow_600SemiBold,
  Barlow_700Bold,
} from '@expo-google-fonts/barlow';
import styles from './AuthHeaderStyles';

export default function AuthHeader({
  title = 'Sign in',
  subtitle = 'to your account',
  caption = "Welcome back you've been missed",
  style,
  titleStyle,
  subtitleStyle,
  captionStyle,
}) {
  const [fontsLoaded] = useFonts({
    Barlow_500Medium,
    Barlow_600SemiBold,
    Barlow_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <View style={style}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      <Text style={[styles.subTitle1, subtitleStyle]}>{subtitle}</Text>
      <Text style={[styles.subTitle2, captionStyle]}>{caption}</Text>
    </View>
  );
}
