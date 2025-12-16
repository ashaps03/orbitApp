import React, { useState } from 'react'
import { View, Text, TextInput, Pressable, StyleSheet, Switch } from 'react-native'
import { Link } from 'expo-router'
import { useFonts, Barlow_400Regular, Barlow_500Medium, Barlow_600SemiBold, Barlow_700Bold } from '@expo-google-fonts/barlow'


function SignInCard() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  const [fontsLoaded] = useFonts({
    Barlow_400Regular,
    Barlow_500Medium,
    Barlow_600SemiBold,
    Barlow_700Bold,
  })

  if (!fontsLoaded) return null

  const handleSubmit = () => {
    // you can hook Firebase auth here later
    console.log({ email, password, remember })
  }
  
  return (
    <View style={styles.outer}>
      <View style={styles.card}>
        <Text style={styles.title}>Sign in</Text>
        <Text style={styles.subTitle1}>to your account</Text>
        <Text style={styles.subTitle2}> Welcome back you've been missed</Text> 


        <View style={styles.field}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Emmy@gmail.com"
            placeholderTextColor="rgba(255,255,255,0.4)"
            autoCapitalize="none"
            keyboardType="email-address"
            style={styles.input}
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="rgba(255,255,255,0.4)"
            placeholder="••••••••"
            secureTextEntry
            style={styles.input}
          />
        </View>
        {/* Create a seperate compoenent for thsi button so that it can be reused in Sign up*/}
        <Pressable style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Sign in</Text>
        </Pressable>

        <Text style={styles.muted}>
          Dont have an account?{' '}
          <Link href="/signUp" style={styles.link}>
            Sign up
          </Link>
        </Text>
      </View>
    </View>
  )
}

export default SignInCard

const styles = StyleSheet.create({
  outer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  card: {
    width: '100%',
    maxWidth: 380,
    padding: 16,
    borderRadius: 12,
    //borderWidth: 1,
    borderColor: 'none',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  title: {
    fontSize: 40,
    fontFamily: 'Barlow_700Bold',
    marginBottom: 0,
    textAlign: 'center',
    color: 'white',
  },
  subTitle1: {
    fontSize: 32,
    fontFamily: 'Barlow_600SemiBold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
    opacity: 0.6,
  },
  subTitle2: {
    fontSize: 14,
    fontFamily: 'Barlow_500Medium',
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
    opacity: 0.4,
  },
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
    borderColor: 'none',
    backgroundColor: 'rgba(255,255,255,.10)',
    color: 'white',
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
    marginBottom: 12,
  },
  rememberRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  rememberText: {
    fontSize: 12,
    color: '#111827',
  },
  link: {
    fontSize: 12,
    color: '#1d4ed8',
    fontWeight: '500',
    textAlign: 'center',
  },
  button: {
    width: '100%',
    backgroundColor: '#1d4ed8',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#ffffff',
    fontFamily: 'Barlow_600SemiBold',
    fontSize: 13,
  },
  muted: {
    fontSize: 12,
    fontFamily: 'Barlow_400Regular',
    color: '#6b7280',
    alignItems: 'center',
  },
  footer: {
    marginTop: 16,
    fontSize: 12,
    color: '#6b7280',
    maxWidth: 380,
    lineHeight: 18,
  },
})
