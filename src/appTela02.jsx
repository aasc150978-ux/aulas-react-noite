import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';

class Tela02 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        nome: '',
        email: '',
        senha: '',
        confirmarSenha: '',
        tipoUsuario: 'Aluno' // Opcoes: aluno, responsavel, professor
      
    }
  }

  componentDidMount() {
    // code to run after component mounts
  }

  componentWillUnmount() {
    // cleanup code
  }

  render() {

    const userTypes = ['Aluno', 'Responsável', 'Professor'];

    return (
      <ScrollView contentContainerStyle={styles.scrollConttent}>
        <Text style={styles.title}>Crie sua conta</Text>
        <Text style={styles.subtitle}>Preecha os dados</Text>

        <TextInput
            style={styles.input}
            placeholder='Nome Completo'
            placeholderTextColor={"#4caf50"}
        />
        <TextInput
            style={styles.input}
            placeholder='Email'
            placeholderTextColor={"#4caf50"}
        />
        <TextInput
            style={styles.input}
            placeholder='Senha'
            placeholderTextColor={"#4caf50"}
            secureTextEntry={true}
        />
        <TextInput
            style={styles.input}
            placeholder='Confirmar Senha'
            placeholderTextColor={"#4caf50"}
            secureTextEntry={true}
        />

        {/*SELETOR DE TIPO DE USUARIO AQUI (ALUNO, RESPONSAVEL, PROFESSOR)*/}
        <Text style={styles.label}>Tipo de Usuário</Text>
        <View style={ styles.userTypeContainer }>
            {userTypes.map((type) => (
                <TouchableOpacity
                    key={type}
                    style={[styles.typeButton, this.state.tipoUsuario === type && styles.activeType]}
                >
                    <Text style={[styles.typeText, this.state.tipoUsuario === type && styles.activeTypeText]}>
                        {type}
                        
                    </Text>    
                    
                </TouchableOpacity>
            ))}
        </View>

        <TouchableOpacity style={ styles.button}>
            <Text style={ styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <View style={ styles.bloco3}>
                <Text style={ styles.footerText}>Não tem conta? </Text>
                <TouchableOpacity>
                <Text style={ styles.linkText}>Cadastre-se</Text>
            </TouchableOpacity>
                      
                      
                      
        </View>          



      </ScrollView>

      

      
    );
  }
}

const styles = StyleSheet.create({
    scrollConttent: {
        flexGrow: 1,
        backgroundColor: '#fff',
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
    },
    subtitle: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 25,
        color: '#555',
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderBlockColor: '#4caf50',
        borderRadius: 5,
        padding: 15,
        marginBottom: 15,
        color: '#000',
    },

    label: {
        fontSize: 15,
        color: '#000',
        marginBottom: 10,
        fontWeight: 'bold',
    },

    userTypeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 25,
        borderWidth: 1,
        borderColor: '#4caf50',
        borderRadius: 8,
        overflow: 'hidden',
    },

    typeButton: {
        flex: 1,
        padding: 12,
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: '#4caf50',

    },

    activeType: {
        backgroundColor: '#4caf50',
        
    },

    typeText: {
        color: '#4caf50',
        fontWeight: 'bold',

    },

    activeTypeText: {
        color: '#fff',
    },

    button: {
    width: '100%', 
    backgroundColor: '#4caf50',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
  },

  buttonText:{
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },

  bloco3: {     
    height:50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    
  },
  footerText: {
    color: '#000',
  },

  linkText: {
    color: '#000',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  }  







    

});

export default Tela02;
