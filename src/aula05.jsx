import React, { Component } from 'react';
import { Checkbox } from 'expo-checkbox';
import { 
    View, 
    Text, 
    StyleSheet,
    TextInput, 
    Image, 
    TouchableOpacity,
    
} from 'react-native';

class Aula05 extends Component {

  //Construtor - Forma tradicional de inicializar estado( dados)
  constructor(props) {
    super(props);

    this.state = {
      nome: '',
      email: '',
      lembrarSenha: false,
    }

  }


  render() {
    return (
      
      <View style={styles.container}>

        
        <View>

            <Text style={{fontSize: 50, color: '#39ff14', textAlign: 'center', fontWeight: 'bold'}}>LOGIN</Text>

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
            
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                  <Checkbox
                    value={ this.state.lembrarSenha}
                    onValueChange={ (valor) => this.setState({lembrarSenha: valor})}
                    color={ this.state.lembrarSenha ? '#4630EB': undefined}
                  />
                  <Text style={{color: 'white', marginLeft: 3, fontSize: 12}}>Lembrar senha</Text>
              </View>
              <Text style={{color: '#39ff14', fontSize: 12}}>Esqueceu a senha?</Text>
            </View>
            
            
                             
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
    marginBottom: 30,
    
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
  },

  texto1: {
    color: 'white',
    fontSize: 15,
    marginTop: 6,
    textAlign: 'center',   
    
  },

  texto2: {
    color: '#39ff14',
    //marginRinght: 20,
    fontSize: 15,
    marginleft: 10,    
    textAlign: 'center',

  },

  
});