import { Image } from 'expo-image';
import * as SplashScreen from 'expo-splash-screen';
import { useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Animated, { Easing, Keyframe } from 'react-native-reanimated';
import { scheduleOnRN } from 'react-native-worklets';

const DURATION = 600;

export function AnimatedSplashOverlay() {
  const [animate, setAnimate] = useState(false);
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const splashKeyframe = new Keyframe({
    0: { transform: [{ scale: 1 }], opacity: 1 },
    70: { opacity: 0 },
    100: { opacity: 0, transform: [{ scale: 1 }] },
  });

  const image = <Image style={styles.image} source={require('../../assets/images/expo-logo.png')} />;

  return animate ? (
    <Animated.View
      entering={splashKeyframe.duration(DURATION).withCallback((finished) => {
        'worklet';
        if (finished) { scheduleOnRN(setVisible, false); }
      })}
      style={styles.splashOverlay}>
      {image}
    </Animated.View>
  ) : (
    <View
      onLayout={() => {
        SplashScreen.hideAsync().finally(() => { setAnimate(true); });
      }}
      style={styles.splashOverlay}>
      {image}
    </View>
  );
}

export function AnimatedIcon() {
  return (
    <View style={styles.iconContainer}>
      <Animated.View style={styles.background} />
      <Image style={styles.image} source={require('../../assets/images/expo-logo.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: { justifyContent: 'center', alignItems: 'center', width: 128, height: 128 },
  image: { width: 76, height: 71 },
  background: { borderRadius: 40, backgroundColor: '#208AEF', width: 128, height: 128, position: 'absolute' },
  splashOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: '#208AEF', alignItems: 'center', justifyContent: 'center', zIndex: 1000 },
});
