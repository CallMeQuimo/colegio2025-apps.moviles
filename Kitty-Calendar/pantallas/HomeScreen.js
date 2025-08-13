import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';

import Header from '../components/Header';
import CustomButton from '../components/CustomButton';
import TextInputSimple from '../components/TextInputSimple';

export default function HomeScreen({ navigation }) {
  const [events, setEvents] = useState([
    { id: '1', title: 'Clase de Matemáticas' },
    { id: '2', title: 'Entrega de tarea' },
  ]);
  const [newTitle, setNewTitle] = useState('');

  function handleAdd() {
    const title = newTitle.trim();
    if (!title) {
      Alert.alert('Aviso', 'El título no puede estar vacío.');
      return;
    }
    const newEvent = { id: String(Date.now()), title };
    setEvents((s) => [newEvent, ...s]);
    setNewTitle('');
  }

  function handleGoProfile() {
    navigation.navigate('Profile'); // asume que existe una ruta 'Profile'
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Inicio" />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.body}
      >
        <View style={styles.inputRow}>
          <TextInputSimple
            value={newTitle}
            onChangeText={setNewTitle}
            placeholder="Nuevo evento (ej: Estudio - Historia)"
            style={styles.input}
            accessibilityLabel="Nuevo evento"
          />
          <CustomButton onPress={handleAdd} style={styles.addBtn}>
            Agregar
          </CustomButton>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Eventos</Text>
          <FlatList
            data={events}
            keyExtractor={(i) => i.id}
            renderItem={({ item }) => (
              <View style={styles.row}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
            )}
            ListEmptyComponent={() => (
              <View style={styles.empty}>
                <Text style={styles.emptyText}>No hay eventos</Text>
              </View>
            )}
            ItemSeparatorComponent={() => <View style={styles.sep} />}
          />
        </View>

        <View style={styles.footer}>
          <CustomButton onPress={handleGoProfile}>Ir a Perfil</CustomButton>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  body: { flex: 1, padding: 16 },
  inputRow: { flexDirection: 'row', gap: 8, alignItems: 'center', marginBottom: 12 },
  input: { flex: 1 },
  addBtn: { paddingHorizontal: 12 },
  section: { flex: 1 },
  sectionTitle: { fontSize: 16, fontWeight: '700', marginBottom: 8 },
  row: { paddingVertical: 12 },
  title: { fontSize: 15 },
  sep: { height: 1, backgroundColor: '#eee' },
  empty: { padding: 16, alignItems: 'center' },
  emptyText: { color: '#6b7280' },
  footer: { marginTop: 12 },
});
