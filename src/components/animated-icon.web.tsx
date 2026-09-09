import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';
import Animated, { Easing, Keyframe } from 'react-native-reanimated';

const DURATION = 600;

export function AnimatedIcon() {
  const glowKeyframe = new Keyframe({
    0: { transform: [{ rotateZ: '0deg' }] },
    100: { transform: [{ rotateZ: '720deg' }] },
  });

  return (
    <View style={styles.iconContainer}>
      <Animated.View entering={glowKeyframe.duration(60000).iterations(-1)} style={styles.glowContainer}>
        <Image style={styles.glow} source={require('../../assets/images/logo-glow.png')} />
      </Animated.View>
      <View style={styles.background} />
      <Image style={styles.image} source={require('../../assets/images/expo-logo.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: { justifyContent: 'center', alignItems: 'center', width: 128, height: 128 },
  glowContainer: { position: 'absolute', width: 201, height: 201 },
  glow: { width: 201, height: 201 },
  image: { width: 76, height: 71, zIndex: 10 },
  background: { borderRadius: 40, backgroundColor: '#208AEF', width: 128, height: 128, position: 'absolute' },
});
