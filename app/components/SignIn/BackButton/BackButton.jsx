import React from 'react';
import { Pressable, Image } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './BackButtonStyles';

export default function BackButton({
  icon,
  size = 44,
  style,
}) {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => router.back()}
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
      <Image
        source={icon}
        style={styles.icon}
        resizeMode="contain"
      />
    </Pressable>
  );
}
