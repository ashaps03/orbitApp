import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import CircleButton from './components/CircleButton';

const LandingPage = () => {
    const router = useRouter();

    const handleNavigation = () => {
        router.push('/sign-up');
    };

    return (
        <LinearGradient
            colors={["#000000", "#8B6CFF", "#8B6CFF", "#FFFFFF"]}
            locations={[.3333, 0.6666, 0.7000, 1]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.container}
        >
            <View style={styles.topArea} pointerEvents="none">
                <Image source={require('../assets/blackhole.png')} style={styles.image} resizeMode="contain" />
            </View>

            <View style={styles.centerArea}>
                <View style={styles.headlineWrapper}>
                    <Text style={styles.headline}>Expand your Orbit.</Text>
                    <Text style={styles.headline} numberOfLines={1}>Build real connections.</Text>
                </View>
                <Text style={styles.subtext}>Your world gets bigger with every connection.</Text>
            </View>

            <View style={styles.bottomArea}>
                <CircleButton onPress={handleNavigation} size={72} />
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'transparent',
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    image: {
        width: 300,
        height: 300,
                marginBottom: 20,
                transform: [{ scaleX: -1 }],
    },
        topArea: {
            alignItems: 'center',
            marginTop: 24,
            width: '100%',
        },
        centerArea: {
            alignItems: 'center',
            marginTop: -10,
            paddingHorizontal: 20,
        },
        headlineWrapper: {
            alignItems: 'center',
        },
        bottomArea: {
            alignItems: 'center',
            height: 220,
            justifyContent: 'flex-end',
            paddingBottom: 40,
            position: 'relative',
            width: '100%',
        },
        vignette: {
            backgroundColor: 'rgba(255,255,255,0.18)',
            borderRadius: 180,
            bottom: 20,
            height: 180,
            position: 'absolute',
            width: 360,
        },
    headline: {
                color: '#FFFFFF',
                fontSize: 30,
                fontWeight: 700,
                lineHeight: 40,
                textAlign: 'center',
    },
    subtext: {
                color: '#FFFFFF',
                fontSize: 16,
                fontStyle: 'Inter',
                fontWeight: 400,
                lineHeight: 24,
                marginTop: 16,
                maxWidth: 360,
                opacity: 0.6,
                textAlign: 'center',
    },
});

export default LandingPage;