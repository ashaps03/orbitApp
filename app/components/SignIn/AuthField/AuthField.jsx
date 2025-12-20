import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useFonts, Barlow_400Regular, Barlow_600SemiBold } from '@expo-google-fonts/barlow';

export default function AuthField({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'none',
  textContentType,
  style,
  inputStyle,
  labelStyle,
}) {
  const [fontsLoaded] = useFonts({
    Barlow_400Regular,
    Barlow_600SemiBold,
  });
  if (!fontsLoaded) return null;

  return (
    <View style={[styles.field, style]}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="rgba(255,255,255,0.4)" 
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        textContentType={textContentType}
        style={[styles.input, inputStyle]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  field: {
    marginBottom: 12,
  },
  label: {
    fontSize: 12,
    fontFamily: 'Barlow_600SemiBold',
    color: 'white',
    marginBottom: 6,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    height: 50,
    fontFamily: 'Barlow_400Regular',
    borderColor: 'transparent',
    backgroundColor: 'rgba(255,255,255,.10)',
    color: 'white',
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
});
