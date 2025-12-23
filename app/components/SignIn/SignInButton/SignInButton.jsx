import React, { useRef, useEffect } from 'react';
import { View, TouchableOpacity, Text, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Barlow_500Medium } from '@expo-google-fonts/barlow';
import styles from './SignInButtonStyles';

export default function SignInButton({
  title,
  onPress,
  disabled = false,
  style,
  textStyle,
  gradientColors = ['#1E31FB', '#FFFFFF'],
  innerBg = '#000000',
}) {
  // Disabled should show no fill (opacity 0)
  const fillAnim = useRef(new Animated.Value(disabled ? 1 : 0)).current;

  const [fontsLoaded] = useFonts({ Barlow_500Medium });

  // Animate fill layer opacity based on disabled state
  useEffect(() => {
    Animated.timing(fillAnim, {
      toValue: disabled ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [disabled]);

  if (!fontsLoaded) return null;

  // Handle press in animation
  const animateIn = () => {
    if (disabled) return;

    Animated.timing(fillAnim, {
      toValue: 0.5,
      duration: 200,
      useNativeDriver: true,
    }).start(() =>
      Animated.timing(fillAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start()
    );
  };

  return (
    <View style={[styles.shadowWrap, style]}>
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
              { backgroundColor: innerBg, opacity: fillAnim },
            ]}
          />

          <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}
