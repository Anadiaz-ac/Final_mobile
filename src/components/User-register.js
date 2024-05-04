import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function register({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Registro Usuario</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Nombre:</Text>
        <TextInput style={styles.input} placeholder='Ingresa tu nombre' />
        <Text style={styles.label}>País de Origen:</Text>
        <TextInput style={styles.input} placeholder='Ingresa tu país de origen' />
        <Text style={styles.label}>Acciones Asociadas:</Text>
        <TextInput style={styles.input} placeholder='Ingresa las acciones asociadas' />
        <Text style={styles.label}>Saldo:</Text>
        <TextInput style={styles.input} keyboardType='numeric' placeholder='Ingresa tu saldo' />
        <Text style={styles.label}>Correo Electrónico:</Text>
        <TextInput style={styles.input} placeholder='Ingresa tu correo electrónico' />
        <Text style={styles.label}>Contraseña:</Text>
        <TextInput style={styles.input} secureTextEntry={true} placeholder='Ingresa tu contraseña' />
        <Button
          title='Enviar'
          style={styles.button}
          onPress={() => {
            navigation.navigate('Dashboard');
          }}
        />
      </View>
      {/* <View style={styles.main}>
        <View style={styles.navBar}>
          <Text style={styles.navBar_Item}>Inicio</Text>
          <Text style={styles.navBar_Item}>Perfil</Text>
          <Text style={styles.navBar_Item}>Otro</Text>
        </View>
      </View> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'start',
    position: 'relative',
  },
  main: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  navBar: {
    width: '100%',
    height: 50,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navBar_Item: {
    width: '33.33%',
    padding: 10,
    borderColor: '#c8c8c8',
    borderWidth: 0.2,
    textAlign: 'center',
    height: '100%',
  },
  title: {
    marginTop: 20,
    textAlign: 'center',
    width: '100%',
    fontSize: 20,
    fontWeight: '500',
  },
  form: {
    width: '90%',
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 0,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#0096c7',
    color: '#fff',
  },
});
