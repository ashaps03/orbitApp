import React from 'react';
import { StyleSheet, Text, View, StyleSheet as RNStyleSheet } from 'react-native';
import { Link } from 'expo-router';
import colors from './theme/signInPageColors';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';
import styles from './styles/signInStyles'; 


const SignIn = () => {
  return (
    <SafeAreaView style={styles.safe} edges={[]}>
      <View style={styles.container}>

        {/* applying styling from seperate sheet */}
        <View style={styles.backgroundLayer}>

          {/* top-left circle */}
          <View style={[styles.glowCircleBig, styles.topLeft]}>
            <LinearGradient
              colors={[
                `${colors.circleTopRight}90`,
                `${colors.circleTopRight}FF`,
                'transparent',
              ]}
              style={styles.glowInner}
            />
          </View>

          {/* top-right circle */}
          <View style={[styles.glowCircleBig, styles.topRight]}>
            <LinearGradient
              colors={[
                `${colors.circleTopLeft}90`,
                `${colors.circleTopLeft}99`,
                'transparent',
              ]}
              style={styles.glowInner}
            />
          </View>

          {/* bottom circle */}
          <View style={[styles.glowCircleBottom, styles.bottomCenter]}>
            <LinearGradient
              colors={[
                `${colors.circleBottom}90`,
                `${colors.circleBottom}1A`,
                'transparent',
              ]}
              style={styles.glowInner}
            />
          </View>

          {/* global blur */}
          <BlurView
            intensity={200}
            tint="dark"
            style={RNStyleSheet.absoluteFill}
            pointerEvents="none"
          />

          {/* black overlay here */}
          <View 
            style={{
              ...RNStyleSheet.absoluteFillObject,
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
            pointerEvents="none"
          />

        </View> 
        
        {/* text in the foreground*/}
        <View style={styles.content}>
          <Text style={styles.h1}>Sign in</Text>
          <Text style={styles.h2}>to your account</Text>
          <Text style={styles.h4}>Welcome back you've been missed</Text>
          <Link style={styles.href} href="/landingPage">
            Back to landing Page
          </Link>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default SignIn;
