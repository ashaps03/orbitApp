import { StyleSheet, StyleSheet as RNStyleSheet } from 'react-native';
import colors from '../../../theme/signInPageColors';

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: 170,
      padding: 16,
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent', 
    },
  
    dividerRow: {
      width: '92%',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 22,
    },
  
    line: {
      flex: 1,
      height: 1,
      backgroundColor: '#F5F5F5',
      opacity: 0.1,
    },
  
    orText: {
      marginHorizontal: 14,
      fontFamily: 'Barlow_600SemiBold',
      fontSize: 12,
      color: '#FFFFFF',
    },
  
    googleOuter: {
      width: 86,
      height: 86,
      borderRadius: 43,
      justifyContent: 'center',
      alignItems: 'center',
  
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.35,
      shadowRadius: 18,
      elevation: 10,
    },
  
    googleInner: {
      width: 76,
      height: 76,
      borderRadius: 38,
      backgroundColor: 'rgba(255, 255, 255, 0.02)',
      justifyContent: 'center',
      alignItems: 'center',
  
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.25,
      shadowRadius: 12,
      elevation: 6,
    },
  
    googleIcon: {
      width: 34,
      height: 34,
    },
  
    googleFallback: {
      fontSize: 34,
      fontWeight: '700',
      color: '#FFFFFF',
    },
  });
  
  export default styles;