import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const MiBoton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => console.log('Presionado')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Botón Flexible</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  button: {
    backgroundColor: 'red',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default MiBoton;
