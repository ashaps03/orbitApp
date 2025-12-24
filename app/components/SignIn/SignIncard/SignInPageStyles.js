import { StyleSheet, StyleSheet as RNStyleSheet } from 'react-native';
import colors from '../../../theme/signInPageColors';

const styles = StyleSheet.create({
    safe: {
      flex: 1,
      backgroundColor: colors.background,
    },
  
    container: {
      flex: 1,
      backgroundColor: '#000000', 
      position: 'relative',
    },

    gradientImage: {
      ...StyleSheet.absoluteFillObject,
      width: '100%',
      height: '100%',
    },
  
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

  });
  
  export default styles;