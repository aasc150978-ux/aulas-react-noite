import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

class Aula04 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
        source={require('../assets/icon.png')} 
        style={styles.icon}
        />
        <Image 
        source={{uri:'https://media.gettyimages.com/id/2185386463/pt/foto/european-badger.jpg?s=1024x1024&w=gi&k=20&c=KXzaa2TSYstDUlmlDM488w-CzYyEA989uBlPKv8uJzM='}} 
        style={styles.icon}
        />
        
      </View>
    );
  }
}

export default Aula04;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    width: 150,
    height: 150,
  }
});