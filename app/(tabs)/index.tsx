import generalStyles from '../../styles/generalStyles';
import { View, Text, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useRef } from 'react';
import { useRouter } from 'expo-router';

export default function SplashScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.5)).current;

  // TODO: Add auth check
  // const router = useRouter();

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 10,
        friction: 2,
        useNativeDriver: true,
      }),
    ]).start();

    // const timer = setTimeout(() => {
    //   router.replace('/auth');
    // }, 2000);

    // return () => clearTimeout(timer);
  }, []);

  return (
    <View style={generalStyles.container}>
      <Animated.View style={[
        generalStyles.iconContainer,
        {
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }],
          marginBottom: 20,
        }
      ]}>
        <Ionicons name="medical" size={100} color="white" />
        <Text style={generalStyles.appName}>Dosify</Text>
      </Animated.View>
    </View>
  )
}