import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const data = [
  {
    name: 'Seoul',
    population: 21500000,
    color: 'rgba(131, 167, 234, 1)',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Toronto',
    population: 2800000,
    color: '#F00',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Beijing',
    population: 527612,
    color: 'red',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
];

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  barPercentage: 0.5,
};

export default function dashboard() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.contentHeader}>
        <View style={styles.header}>
          <Image style={styles.logo} source={require('../../assets/profile.png')}></Image>
          <Text style={styles.welcome}>Bienvenido, Juan</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyProfile}>
          <View style={styles.bodyProfile2}>
            <Text style={{ fontWeight: '600' }}>Tu Portafolio</Text>
            <Text style={{ color: 'green', fontWeight: '700' }}>$ 12,000,000</Text>
          </View>
        </View>
        <Text style={{ marginTop: 20, marginBottom: 20 }}>
          <Text>Tus ingresos de hoy son:</Text>
          <Text style={{ fontWeight: '500' }}> $120,000 </Text>
          <Text style={{ color: 'green' }}>(+ 6%) </Text>
        </Text>
        <View style={styles.containerChart}>
          <Image style={styles.imgChart} source={require('../../assets/chartLines.png')}></Image>
          <Image style={styles.imgChart} source={require('../../assets/chartPie.png')}></Image>
          {/* <PieChart
            data={data}
            width={200}
            height={220}
            chartConfig={chartConfig}
            accessor={'population'}
            backgroundColor={'transparent'}
            paddingLeft={'15'}
            center={[10, 50]}
            absolute
          /> */}
        </View>
        <View style={styles.contentIcons}>
          <View
            style={{
              flex: 1,
              padding: 5,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              elevation: 3,
            }}
          >
            <View style={styles.icons}>
              <Image style={styles.oneIcon} source={require('../../assets/icon-dolar.png')}></Image>
            </View>
            <Text style={{ fontSize: 11, marginTop: 8 }}>Transacciones</Text>
          </View>

          <View
            style={{
              flex: 1,
              padding: 5,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              elevation: 3,
            }}
          >
            <View style={styles.icons}>
              <Image style={styles.oneIcon} source={require('../../assets/hucha.png')}></Image>
            </View>
            <Text style={{ fontSize: 11, marginTop: 8 }}>Depósito</Text>
          </View>

          <View
            style={{
              flex: 1,
              padding: 5,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              elevation: 3,
            }}
          >
            <View style={styles.icons}>
              <Image style={styles.oneIcon} source={require('../../assets/cuenta-bancaria.png')}></Image>
            </View>
            <Text style={{ fontSize: 11, marginTop: 8 }}>Retirar</Text>
          </View>
        </View>
      </View>
      <View style={styles.main}>
        <View style={styles.navBar}>
          <Text style={styles.navBar_Item}>Inicio</Text>
          <Text style={styles.navBar_Item}>Perfil</Text>
          <Text style={styles.navBar_Item}>Otro</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
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
  contentHeader: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 150,
  },
  header: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    justifyContent: 'start',
    gap: 15,
  },
  name: {
    color: 'grey',
    fontSize: 18,
  },
  welcome: {
    color: '#0096c7',
    fontSize: 25,
    // marginTop: 100,
    // marginLeft: 50,
  },
  logo: {
    // position: 'absolute',
    // top: 40,
    width: 35,
    height: 35,
    marginLeft: 20,
    // left: 20,
  },
  body: {
    width: '90%',
    backgroundColor: '#e7ecef',
    height: 500,
    borderRadius: 20,
    padding: 20,
  },
  bodyProfile: {
    borderBottomColor: '#ced4da',
    borderBottomWidth: 1,
    height: 50,
  },
  bodyProfile2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerChart: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop: 20,
  },
  imgChart: {
    width: '45%',
    height: 150,
  },
  contentIcons: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    marginTop: 80,
    height: 200,
    gap: 10,
  },
  icons: {
    borderRadius: 100,
    borderColor: 'grey',
    borderWidth: 1,
    padding: 5,
    alignItems: 'center',
    width: 50,
    height: 50,
    paddingTop: 5,
  },
  oneIcon: {
    width: '100%',
    height: '100%',
  },
});
