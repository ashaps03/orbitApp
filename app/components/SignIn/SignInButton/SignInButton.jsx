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
  const fillAnim = useRef(new Animated.Value(1)).current;

  const [fontsLoaded] = useFonts({
    Barlow_500Medium,
  });
  if (!fontsLoaded) return null;

  const animateIn = () => {
    Animated.timing(fillAnim, {
      toValue: 0,       
      duration: 100,
      useNativeDriver: true,
    }).start();
  };


  return (
    <View style={[styles.shadowWrap, style, disabled && styles.disabledOuter]}>
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.borderWrap}
      >
        <TouchableOpacity
          activeOpacity={1}
          disabled={disabled}
          onPress={onPress}
          onPressIn={animateIn}
          style={styles.inner}
        >
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
