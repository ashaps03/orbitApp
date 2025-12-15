import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Link} from 'expo-router'

const LandingPage = () => {
  return (
    <View style={styles.container}>
      <Text>landingPage</Text>
      <Link href="/signUp">press for signUp page</Link>
      <Link href="/">Back Home</Link>
    </View>
  )
}

export default LandingPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})