import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>CURRICULUM VITAE</Text>
      <Text style={styles.textNormal}>Nama: Ali Ma'sum Ajjawiyi</Text>
      <Text style={styles.textNormal}>NIM: 2488010010</Text>
      <Text style={styles.textNormal}>Cita-cita: Web Developer</Text>
      <Text style={styles.textNormal}>menggapai cita-cita: berlatih dengan giat dan belajar dari kesalahan </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  textTitle: {
    color: '#0000FF',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textNormal: {
    color: '#000000',
    fontSize: 15,
    marginVertical: 2,
  }
});
