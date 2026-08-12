import React, { Component } from 'react';
import { View, 
    Text, 
    StyleSheet,
    TextInput, 
    Image, 
    TouchableOpacity,
} from 'react-native';

class Aula05 extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View>

            <Image
                source={require('../img/logo-barao.png')}
                style={ styles.logo }
            />

        
            <Text style={ styles.label }>Nome:</Text>
            <TextInput
            style={ styles.input }
            placeholder='Informe seu nome:'   

            />

            <Text style={ styles.label }>Email:</Text>
            <TextInput
            style={ styles.input }
            placeholder='Informe seu Email:'      
           
            />

            <TouchableOpacity style={ styles.botao }>
                <text style={ styles.textoBotao }>Entrar</text>
            </TouchableOpacity>

            <Text style={ styles.texto1}>Não tem conta?
                <Text style={ styles.texto2}> Cadastrar-se! </Text>
            </Text>    

        </View>

      </View>

    );
  }
}

export default Aula05;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },


  input: {
    width: 250,
    borderWidth: 1,
    borderColor: '#ccc',
    boderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16, 
    backgroundColor: 'white',
  },

  label: {
    fontSize: 16,
    marginBotton: 5,
    color: 'white'
    
  },

  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 70,
    
  },

  botao:{
    backgroundColor: 'green',
    width: 250,
    padding: 10,
    borderRaius: 5,
    marginTop: 20,    
  },

  textoBotao: {
    color: 'white',
    textAlign: 'center',
  }

  
});