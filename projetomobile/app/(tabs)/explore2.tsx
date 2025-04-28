import React, { useEffect, useState } from 'react';
import { StyleSheet, Image } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  const [carBrands, setCarBrands] = useState([]); // Estado para armazenar as marcas de carros
  const [loading, setLoading] = useState(true); // Estado para controle de loading
  const [error, setError] = useState(null); // Estado para armazenar erros

  const fetchCarBrands = async () => {
    try {
      const response = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json'); // API pública para marcas de carros
      if (!response.ok) {
        throw new Error('Erro na resposta da rede');
      }
      const data = await response.json(); // Converte a resposta para JSON
      setCarBrands(data.Results); // Atualiza o estado com a lista de marcas
    } catch (error) {
      console.error('Erro ao buscar marcas de carros:', error);
      setError(error.message); // Armazena a mensagem de erro
    } finally {
      setLoading(false); // Atualiza o estado de loading
    }
  };

  useEffect(() => {
    fetchCarBrands(); // Chama a função para buscar marcas de carros
  }, []);

  if (loading) {
    return <ThemedText>Carregando...</ThemedText>; // Exibe mensagem de loading
  }

  if (error) {
    return <ThemedText>Erro: {error}</ThemedText>; // Exibe mensagem de erro
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/italia.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">MARCAS DE CARROS</ThemedText>
      </ThemedView>
      <ThemedText>EXISTEM DIVERSAS MARCAS DE CARROS, AQUI ESTÁ ALGUMAS DELAS</ThemedText>

      {carBrands.map((brand) => (
        <Collapsible key={brand.Make_ID} title={brand.Make_Name}> {/* Supondo que cada marca tenha um Make_ID e Make_Name */}
          <ThemedText>{brand.Make_Name} é uma marca de carro.</ThemedText> {/* Exibe o nome da marca */}
          <ExternalLink href={`https://www.example.com/${brand.Make_Name}`}> {/* Link fictício para mais informações */}
            <ThemedText type="link">Learn more</ThemedText>
          </ExternalLink>
        </Collapsible>
      ))}
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
    width: 440,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});