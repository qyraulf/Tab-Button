import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <View style={styles.logoContainer}>
            <Image
              source={require('./assets/instagram_logo.png')}
              style={styles.logo}
            />
          </View>
        </View>
        <View style={styles.rightHeader}>
          <View style={styles.otherLogoContainer}>
            <Image
              source={require('./assets/other_logo.png')}
              style={styles.otherLogo}
            />
          </View>
        </View>
      </View>
      {/* Isi konten lainnya */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Latar belakang putih untuk seluruh layar
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  leftHeader: {
    flex: 1,
  },
  rightHeader: {
    flex: 1,
    alignItems: 'flex-end',
  },
  logoContainer: {
    backgroundColor: 'white', // Latar belakang putih
    padding: 8,
  },
  otherLogoContainer: {
    backgroundColor: 'white', // Latar belakang putih
    padding: 8,
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
  otherLogo: {
    width: 120, // Sesuaikan ukuran logo lain sesuai kebutuhan
    height: 40, // Sesuaikan ukuran logo lain sesuai kebutuhan
    resizeMode: 'contain',
  },
});

export default HomeScreen;
