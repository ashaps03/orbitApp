import React, { useRef } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Barlow_500Medium } from '@expo-google-fonts/barlow';
import styles from './SignInButtonStyles'


export default function SignInButton({
  title,
  onPress,
  disabled = false,
  style,
  textStyle,
  gradientColors = ['#1E31FB', '#FFFFFF'],
  innerBg = '#000000',
}) {

  // Animation value for the fill layer

  const fillAnim = useRef(new Animated.Value(1)).current;

  const [fontsLoaded] = useFonts({
    Barlow_500Medium,
  });
  if (!fontsLoaded) return null;

  // Animation function to handle press in effect

  const animateIn = () => {
    Animated.timing(fillAnim, {
      toValue: 0,       
      duration: 100,
      useNativeDriver: true,
    }).start();
  };


  return (
    <View style={[styles.shadowWrap, style, disabled && styles.disabledOuter]}>

      {/* This is the gradient well use as border*/}
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.borderWrap}
      >
        {/* This is the inner touchable area with animation */}
        <TouchableOpacity
          activeOpacity={1}
          disabled={disabled}
          onPress={onPress}
          onPressIn={animateIn}
          style={styles.inner}
        >
        {/* This is the animated fill layer that creates the press effect */}
          <Animated.View
            pointerEvents="none"
            style={[
              styles.fillLayer,
              {
                backgroundColor: innerBg,
                opacity: fillAnim,
              },
            ]}
          />

          <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}
