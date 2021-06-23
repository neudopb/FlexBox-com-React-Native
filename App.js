import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={ styles.box }>
        <Text style={ styles.numero }>1</Text>
      </View>
      <View style={ styles.box }>
        <Text style={ styles.numero }>2</Text>
      </View>
      <View style={ styles.box }>
        <Text style={ styles.numero }>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7ffe4',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  box: {
    width: 100,
    height: 100,
    margin: 10,
    backgroundColor: '#A9BCD0',
    alignItems: 'center',
    justifyContent: 'center'
  },
  numero: {
    fontSize: 25
  },
});
