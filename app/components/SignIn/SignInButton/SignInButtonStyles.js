import { StyleSheet, StyleSheet as RNStyleSheet } from 'react-native';
import colors from '../../../theme/signInPageColors';

const styles = StyleSheet.create({
    shadowWrap: {
      width: '100%',
      borderRadius: 50,
      marginBottom: 12,
      marginTop: 12,
      shadowColor: '#917EFF',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.4,
      shadowRadius: 10,
      elevation: 10,
  
      overflow: 'visible',
    },
  
    borderWrap: {
      width: '100%',
      padding: 1, 
      borderRadius: 50,
    },
  
    inner: {
      height: 50,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden', 
    },
  
    fillLayer: {
      ...StyleSheet.absoluteFillObject,
      borderRadius: 50,
    },
  
    text: {
      fontFamily: 'Barlow_500Medium',
      fontSize: 14,
      color: '#FFFFFF',
      zIndex: 1,
    },
  
    disabledOuter: {
      opacity: 0.6,
    },
  });
  
  export default styles;