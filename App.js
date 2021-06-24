import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <View style={styles.boxMenu}>
          <Text style={styles.txtMenu}>Menu</Text>
        </View>
        <View style={styles.boxMenu}>
          <Text style={styles.txtMenu}>Logs</Text>
        </View>
        <View style={styles.boxMenu}>
          <Text style={styles.txtMenu}>Credits</Text>
        </View>
      </View>

      <View style={styles.corpo}>
        <View style={styles.boxCorpo1}>
          <View style={styles.cx1}></View>
          <View style={styles.cx1}></View>
          <View style={styles.cx1}></View>
        </View>
        <View style={styles.boxCorpo2}>
          <View style={styles.cx2}></View>
          <View style={styles.cx2}></View>
          <View style={styles.cx2}></View>
        </View>
        <View style={styles.boxCorpo3}>
          <View style={styles.cx3}></View>
          <View style={styles.cx3}></View>
          <View style={styles.cx3}></View>
          <View style={styles.cx3}></View>
          <View style={styles.cx3}></View>
          <View style={styles.cx3}></View>
          <View style={styles.cx3}></View>
          <View style={styles.cx3}></View>
          <View style={styles.cx3}></View>
          <View style={styles.cx3}></View>
          <View style={styles.cx3}></View>
          <View style={styles.cx3}></View>
          <View style={styles.cx3}></View>
          <View style={styles.cx3}></View>
          <View style={styles.cx3}></View>
        </View>
      </View>
      
      <View style={styles.rodape}>
        <Text style={styles.txtRodape}>Exercício 01 - DDM</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    flexDirection: 'column',
  },

  menu: {
    width: '100%',
    height: 56,
    marginTop: 29,
    backgroundColor: '#C4C4C4',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  boxMenu: {
    width: 77,
    height: 28,
    backgroundColor: '#000000',
    borderRadius: 10,
    margin: 11,
    alignItems: 'center',
  },
  txtMenu: {
    color: '#fff',
    fontSize: 20,
  },

  corpo: {
    flex: 1,
    backgroundColor: '#B2B9FF',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: 55,
    borderRadius: 20,
  },
  boxCorpo1: {
    width: 230,
    height: 124,
    backgroundColor: '#E5E5E5',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  boxCorpo2: {
    width: 230,
    height: 124,
    backgroundColor: '#E5E5E5',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  boxCorpo3: {
    width: 230,
    height: 124,
    backgroundColor: '#E5E5E5',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  cx1: {
    backgroundColor: '#000',
    width: 45,
    height: 106,
    margin: 10,
  },
  cx2: {
    width: 209,
    height: 31,
    backgroundColor: '#000',
    margin: 10,
  },
  cx3: {
    width: 35,
    height: 31,
    backgroundColor: '#000',
    margin: 5,
  },

  rodape: {
    width: '100%',
    height: 55,
    backgroundColor: '#4E466A',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtRodape: {
    color: '#fff',
    fontSize: 20,
  }
  
});
