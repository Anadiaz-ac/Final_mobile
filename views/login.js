// import { Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

// export default function App() {
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.containerBG}></View>
//       <Image style={styles.logo} source={require('./assets/logo_blanco.png')}></Image>
//       <View style={styles.containerForm}>
//         <Text style={styles.title}>Acceso</Text>
//         <Text style={styles.title2}>Acciones & Gestión S.A.S</Text>
//         <View style={styles.form}>
//           <View style={styles.containerInput}>
//             <Text>Usuario: </Text>
//             <TextInput style={styles.textInput}></TextInput>
//           </View>
//           <View style={styles.containerInput}>
//             <Text>Contraseña:</Text>
//             <TextInput secureTextEntry={true} style={styles.textInput}></TextInput>
//           </View>
//           <View style={styles.containerButton}>
//             <Button style={styles.buttons} title='Ingresar' color='#0077b6'></Button>
//           </View>
//         </View>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#e5e5e5',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   containerForm: {
//     backgroundColor: 'white',
//     width: '80%',
//     height: 450,
//     borderRadius: 20,
//     elevation: 3,
//     alignItems: 'center',
//     marginTop: '10%',
//   },
//   form: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '90%',
//     gap: 20,
//     marginTop: 20,
//   },
//   textInput: {
//     borderColor: '#c2c5aa',
//     borderWidth: 0.5,
//     borderRadius: 8,
//     width: '100%',
//     height: 40,
//     paddingHorizontal: 10,
//   },
//   containerInput: {
//     width: '90%',
//     gap: 7,
//   },
//   title: {
//     position: 'absolute',
//     marginTop: 30,
//     fontWeight: '700',
//     fontSize: 20,
//   },
//   title2: {
//     position: 'absolute',
//     marginTop: 65,
//     fontWeight: '700',
//     fontSize: 12,
//     color: '#0096c7',
//   },
//   containerButton: {
//     marginTop: 25,
//   },
//   containerBG: {
//     backgroundColor: '#0096c7',
//     position: 'absolute',
//     height: 380,
//     width: '100%',
//     top: 0,
//   },
//   logo: {
//     width: 80,
//     height: 80,
//     position: 'absolute',
//     top: 80,
//   },
// });
