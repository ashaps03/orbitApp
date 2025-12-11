import { StyleSheet, StyleSheet as RNStyleSheet } from 'react-native';
import colors from '../theme/signInPageColors';

const styles = StyleSheet.create({
    safe: {
      flex: 1,
      backgroundColor: colors.background,
    },
  
    container: {
      flex: 1,
      backgroundColor: colors.background,
      position: 'relative',
    },
  
    backgroundLayer: {
      ...RNStyleSheet.absoluteFillObject,
      overflow: 'hidden',
    },
  
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    glowCircleBig: {
      position: 'absolute',
      width: 700,
      height: 700,
      borderRadius: 350,
      overflow: 'hidden',
    },
  
    glowCircleBottom: {
      position: 'absolute',
      width: 300,
      height: 300,
      borderRadius: 150,
      overflow: 'hidden',
    },
  
    glowInner: {
      flex: 1,
    },
  
    //positioning for circles... can be modifies
    topLeft: { top: -10, left: -500 },
    topRight: { top: -260, right: -500 },
    bottomCenter: { bottom: -100, right: -150 },
  
    h1: { fontSize: 32, fontWeight: 'bold', color: colors.white, marginBottom: 8 },
    h2: { fontSize: 24, fontWeight: '600', color: colors.white, marginBottom: 8 },
    h4: { fontSize: 16, fontWeight: '400', marginBottom: 16, color: colors.white },
    href: { fontSize: 16, color: colors.white, textDecorationLine: 'underline' },
  });
  
  export default styles;