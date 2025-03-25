import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/fotologo2.jpg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">MÓDULOS AUTOMOTIVOS</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">ECU (Engine Control Unit)</ThemedText>
        <ThemedText>
          - <ThemedText type="defaultSemiBold">Controla o motor, gerenciando injeção de combustível, ignição e emissões.</ThemedText> {' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m', 
              web: ''
            })}
          </ThemedText>{' '}
        
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">TCM (Transmission Control Module)</ThemedText>
        <ThemedText>
        - Gerencia o câmbio automático ou automatizado.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">BCM (Body Control Module)</ThemedText>
        <ThemedText>
          {' '}
          <ThemedText type="defaultSemiBold">- Controla funções do corpo do veículo, como luzes, vidros e travas</ThemedText>{' '}
          <ThemedText type="defaultSemiBold">.</ThemedText>{' '}
          <ThemedText type="defaultSemiBold"></ThemedText>{' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
          
          
        </ThemedText>
        <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">ABS (Anti-lock Braking System Module)</ThemedText>
        <ThemedText type="defaultSemiBold">– Gerencia o sistema de freios antitravamento.</ThemedText>{' '}
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 249,
    width: 398,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
