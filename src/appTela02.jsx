import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';

// IMPORTACOES DO FIREBASE (V9/V10 MODULAR)
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

// inicializacao do firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const firebaseConfig = {
  apiKey: "AIzaSyBTnTYPA5Tmh0JKdMUpluUu9MYMFh_M6Io",
  authDomain: "primeiro-projeto-noite-4abef.firebaseapp.com",
  projectId: "primeiro-projeto-noite-4abef",
  storageBucket: "primeiro-projeto-noite-4abef.firebasestorage.app",
  messagingSenderId: "491806394125",
  appId: "1:491806394125:web:c7722b76e72b5449ef9244"
};
class Tela02 extends Component {
    constructor(props) {
        super(props);
        this.state ={
            nome: '',
            email: '',
            senha: '',
            confirmarSenha: '',
            tipoUsuario: 'Aluno', //opcoes: aluno, responsavel, professor
            dropDownAberto: false,
        } 
    }

  render() {
    
    const userTypes = ['Aluno', 'Responsavel', 'Professor'];

    return (
      <ScrollView contentContainerStyle={ styles.scrollContent}>

        <Text style={ styles.title }>Crie sua conta</Text>
        <Text style={ styles.subtitle }>Preencha os dados</Text>

        <TextInput 
            style={ styles.input }
            placeholder='Nome Completo'
            placeholderTextColor={'#4caf50'}
        />
        <TextInput 
            style={ styles.input }
            placeholder='Email'
            placeholderTextColor={'#4caf50'}
        />
        <TextInput 
            style={ styles.input }
            placeholder='Senha'
            placeholderTextColor={'#4caf50'}
        />
        <TextInput 
            style={ styles.input }
            placeholder='Confirmar senha'
            placeholderTextColor={'#4caf50'}
        />

        {/* SELETOR DE TIPO DE USUSARIO: ALUNO RESPONSAVEL E PROFESSOR 
        <Text style={ styles.label }>Tipo de Usuario</Text>
        <View style={ styles.userTypeContainer }>
            {userTypes.map((type) => (
                <TouchableOpacity
                    key={type}
                    style={ [styles.typeButton, this.state.tipoUsuario === type && styles.activeType ]}
                    
                >
                    <Text style={[ styles.typeText, this.state.tipoUsuario === type && styles.activeTypeText]}>
                        {type}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
        */}

        <Text style={ styles.label }>Tipo de Usuario</Text>
        <View style={ styles.dropdownContainer }>
            <TouchableOpacity
              style={ styles.dropdownSelector}
              onPress={() => this.setState({dropDownAberto: !this.state.dropDownAberto})}
            >
              <Text style={ styles.dropdownSelectorText}>{ this.state.tipoUsuario }</Text>
              <Text style={ styles.dropdownArrow}>{ this.state.dropDownAberto ? '🔼' : '🔽'}</Text>
            </TouchableOpacity>
            {this.state.dropDownAberto && (
              <View style={ styles.dropdownList }>
                { userTypes.map((type) =>(
                  <TouchableOpacity
                    key={type}
                    style={ styles.dropdownItem }
                    onPress={ () => this.setState({ tipoUsuario: type, dropDownAberto: false })}
                  >
                    <Text style={[
                        styles.dropdownItemText,
                        this.state.tipoUsuario === type && styles.dropdownItemTextSelected
                    ]}>
                      { type }

                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
        </View>


        <TouchableOpacity style={ styles.button}>
            <Text style={ styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

      </ScrollView>
    );
  }
}

export default Tela02;

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center'
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000'
  },

  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    textAlign: 'center',
    marginBottom: 25
  },
  input: {
    width: '100%', 
    borderWidth: 1,
    borderBlockColor: '#4caf50',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    color: '#000'
  },

  label: {
    fontSize: 14,
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
    overflow: 'hidden'
  },

  typeButton: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: '#4CAF50'
  },

  activeType: {
    backgroundColor: '#4caf50',
  },

  typeText: {
    color: '#4caf50',
    fontWeight: 'bold'
  },

  activeTypeText: {
    color: '#fff'
  },

  dropdownContainer: {
    marginBottom: 25,
    position: 'relative',
    zIndex: 1000,  
  },

  dropdownSelector: {
    borderWidth: 1,
    borderColor: '#4caf50',
    borderRadius: 8,
    padding: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  dropdownSelectorText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  dropdownArrow: {
    position: 'absolute',
    right: 15,
    color: '#4caf50',
    fontSize: 14,
  },

  dropdownList: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#4caf50',
    borderRadius: 8,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },

  dropdownItem: {
    padding: 15,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eeee',
  },

    dropdownItemText: {
    color: '#333',
    fontSize: 16,
    textAlign: 'center',
  },


    dropdownItemTextSelected: {
    color: '#4caf50',
    fontWeight: 'bold',
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

});