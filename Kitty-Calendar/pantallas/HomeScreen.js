import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Btn1 from './components/Btn1';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>Bienvenido a Meow-Calendar</Text>
        <Text style={styles.subtitle}>
          Acaso ya tienes sesión?
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <Btn1 
          texto="Inicie sesión" 
          onPress={() => console.log('Pantalla para inicio de sesión')} 
          style=""
        />
        <Btn1 
          texto="Cree una cuenta" 
          onPress={() => console.log('Pantalla de crear cuenta')} 
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9c6a2f',
    padding: 20,
    justifyContent: 'space-between',
  },
  header: {
    marginTop: 60,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  subtitle: {
    fontSize: 18,
    color: '#f8f8f8',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  buttonsContainer: {
    marginBottom: 60,
    alignItems: 'center',
  },
});