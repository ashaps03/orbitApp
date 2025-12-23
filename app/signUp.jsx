import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Link} from 'expo-router'

const SignUp = () => {
  return (
    <View style={styles.container}>
      <Text>sign up page</Text>
      <Link href="/signIn">Press for sign In</Link>
      <Link href="/usernamePage">Press for Username page</Link>
      <Link href="/landingPage">Back to Landing Page</Link>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  })