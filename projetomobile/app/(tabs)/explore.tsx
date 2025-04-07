import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/motor2.jpg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">PEÇAS DE MOTORES</ThemedText>
      </ThemedView>
      <ThemedText>teteuzinho</ThemedText>
      <Collapsible title="O QUE SÃO PEÇAS DE MOTORES">
        <ThemedText>
        Peças de motores automotivos são componentes essenciais que todas precisam estar de acordo para ter
        um funcionamento correto{' '}
          <ThemedText type="defaultSemiBold"></ThemedText>{' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
        <ThemedText>
           <ThemedText type="defaultSemiBold"></ThemedText>{' '}
          
        </ThemedText>
        <ExternalLink href="https://autopapo.com.br/noticia/10-pecas-mais-importantes-motor/">
          <ThemedText type="link">saiba mais</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="COMPONENTES ESSENCIAIS">
        <ThemedText>
          -BLOCO DE MOTOR
           {' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
          
        </ThemedText>
        <ThemedText>
          -CABEÇOTE {' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
        <ThemedText>
          -PISTÃO {' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>

        <ThemedText>
          -VIRABREQUIM {' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
        <ThemedText>
          -COMANDO DE VÁLVULAS {' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
        <ThemedText>
          entre outros {' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
      </Collapsible>
      <Collapsible title="FOTO DE MOTOR AMPLIADA">
        <ThemedText>
           <ThemedText type="defaultSemiBold"></ThemedText>{' '}
          <ThemedText type="defaultSemiBold"> </ThemedText>MOTOR CUMMINS 6CC. PODENDO CUSTAR ATÉ R$45.000,00
        </ThemedText>
        <Image source={require('@/assets/images/motor3.jpg')} style={{ alignSelf: 'center' }} />

      </Collapsible>
      <Collapsible title="MOTORES EXPLODINDO">
        <ThemedText>
          UM MOTOR PODE "EXPLODIR" POR CONTA DE TRABALHO EXCESSIVO <ThemedText type="defaultSemiBold"></ThemedText>{' '}
          <ThemedText style={{ fontFamily: 'SpaceMono' }}>
            
          </ThemedText>
        </ThemedText>
        <ThemedText>
          -DODGE RAM EXPLODINDO MOTOR {' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
        <ExternalLink href="https://www.youtube.com/watch?v=jpJb5wPcXV0">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Light and dark mode components">
        <ThemedText>
          This template has light and dark mode support. The{' '}
          <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
          what the user's current color scheme is, and so you can adjust UI colors accordingly.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">motor</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Animations">
        <ThemedText>
          This template includes an example of an animated component. The{' '}
          <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> component uses
          the powerful <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText>{' '}
          library to create a waving hand animation.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  reactLogo: {
    height: 249,
    width: 398,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  
});
