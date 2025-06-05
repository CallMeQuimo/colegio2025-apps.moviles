import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Btn from './Btn';
export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <>
    <View>
       <Text style={styles.texto}>App principal</Text>
      <Btn texto="texto"/>
      <Btn texto="Otro btn"/>
             <Btn
          texto="Con console.log"
          presionado={() => console.log("Debug", "Hola desde console.log")}
        />
        <Btn texto="texto"/>
        <Btn texto="texto"/>
        <Btn texto="asdasds"/>
        <Btn texto="texto"/>
        <Btn texto="texto"/>

      
     </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  texto: {
    fontSize: 25,
    color: 'red',
  }
});