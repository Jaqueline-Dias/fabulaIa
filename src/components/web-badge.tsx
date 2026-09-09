import { Image } from 'expo-image';
import { Pressable, StyleSheet, useColorScheme } from 'react-native';

import { ExternalLink } from './external-link';

export function WebBadge() {
  const colorScheme = useColorScheme();
  const theme = colorScheme ?? 'light';

  return (
    <ExternalLink href="https://expo.dev" asChild>
      <Pressable style={styles.container}>
        <Image
          source={
            theme === 'dark'
              ? require('../../assets/images/expo-badge-white.png')
              : require('../../assets/images/expo-badge.png')
          }
          style={styles.image}
        />
      </Pressable>
    </ExternalLink>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 38,
  },
});
