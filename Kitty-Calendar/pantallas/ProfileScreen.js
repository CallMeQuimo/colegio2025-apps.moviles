// File: src/screens/ProfileScreen.js
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Alert } from 'react-native';

import Header from '../components/Header';
import CustomButton from '../components/CustomButton';
import TextInputSimple from '../components/TextInputSimple';

export default function ProfileScreen({ navigation, route }) {
  //Recibir datos desde navegación: route.params
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    //Si vienen datos por params los cargamos
    if (route?.params?.name) setName(route.params.name);
    if (route?.params?.email) setEmail(route.params.email);
  }, [route?.params]);

  function handleSave() {
    if (!name.trim()) {
      Alert.alert('Aviso', 'El nombre no puede quedar vacío.');
      return;
    }
    //Test(No hace nd)
    setSaved(true);
    Alert.alert('Guardado', 'Tus cambios fueron guardados.');
  }

  function handleBack() {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Perfil" />

      <View style={styles.body}>
        <Text style={styles.label}>Nombre</Text>
        <TextInputSimple
          value={name}
          onChangeText={setName}
          placeholder="Tu nombre"
          style={styles.input}
          accessibilityLabel="Nombre"
        />

        <Text style={styles.label}>Email</Text>
        <TextInputSimple
          value={email}
          onChangeText={setEmail}
          placeholder="tunombre@ejemplo.com"
          keyboardType="email-address"
          style={styles.input}
          accessibilityLabel="Correo electrónico"
        />

        <View style={styles.actions}>
          <CustomButton onPress={handleBack} style={{ flex: 1 }}>
            Volver
          </CustomButton>
          <View style={{ width: 8 }} />
          <CustomButton onPress={handleSave} style={{ flex: 1 }}>
            Guardar
          </CustomButton>
        </View>

        {saved ? <Text style={styles.saved}>Cambios guardados ✔️</Text> : null}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  body: { padding: 16, flex: 1 },
  label: { marginTop: 12, marginBottom: 6, color: '#374151' },
  input: {},
  actions: { flexDirection: 'row', marginTop: 18 },
  saved: { marginTop: 12, color: '#10b981', fontWeight: '600' },
});
