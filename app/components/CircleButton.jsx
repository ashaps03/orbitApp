import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Svg, Path } from 'react-native-svg';

/**
 * CircleButton
 *
 * Reusable circular button component used for navigation or actions.
 *
 * Props:
 * @param {function} onPress - Callback when the button is pressed.
 * @param {number} [size=72] - Diameter of the button in pixels.
 * @param {object} [style] - Additional style object applied to the button container.
 * @param {React.ReactNode} [children] - Optional custom content to render inside the button. If not provided, a default arrow is rendered.
 *
 */

const CircleButton = ({ onPress, size = 72, style, children }) => {
  const fontSize = Math.round(size * 0.42);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { width: size, height: size, borderRadius: size / 2 }, style]}
      accessibilityRole="button"
    >
      {children ? (
        children
      ) : (
        <View style={{ transform: [{ rotate: '-180deg' }] }}>
          <Svg width={Math.round(fontSize)} height={Math.round(fontSize * 0.77)} viewBox="0 0 25 19.311" fill="none">
            <Path d="M20 9.655H6.5" stroke="#FFFFFF" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M11 3.655L5 9.655 11 15.655" stroke="#FFFFFF" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
          </Svg>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  arrow: {
    color: '#fff',
  },
});

export default CircleButton;
