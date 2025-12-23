import React from 'react';
import { Pressable } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import Svg, { Path } from 'react-native-svg';
import styles from './BackButtonStyles';

export default function BackButton({
  size = 44,
  style,
}) {
  const router = useRouter();
  const pathname = usePathname(); // get current route

  // Handle back navigation with logging
  const handleBack = () => {
    router.back();

    // log the new route AFTER the back navigation
    setTimeout(() => {
      console.log(" Back button pressed. Redirected to:", pathname);
    }, 50);
  };

  return (
    <Pressable
      onPress={handleBack}
      style={[
        styles.container,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
        },
        style,
      ]}
    >
      <Svg
        width={Math.round(size * 0.55)}
        height={Math.round(size * 0.55 * 0.77)}
        viewBox="0 0 25 19.311"
        fill="none"
      >
        {/* Horizontal line */}
        <Path
          d="M20 9.655H6.5"
          stroke="#FFFFFF"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Arrow head */}
        <Path
          d="M11 3.655L5 9.655 11 15.655"
          stroke="#FFFFFF"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </Pressable>
  );
}
