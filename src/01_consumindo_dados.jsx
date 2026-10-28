import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { db } from './firebaseConnection';
import { collection, getDocs } from 'firebase/firestore';

class BuscarDados extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: ''
        };
    }

    async componentDidMount() {
        const referencia = collection(db, 'usuarios');
        const resultado = await getDocs(referencia)
        
        if( !resultado.empty){
            const primeiroDoc = resultado.docs[0].data();
            this.setState({ nome: primeiroDoc.nome,status:primeiroDoc.status })
        }
    }

    

    render() {
        return (
        <View style={styles.container}>
            <Text>Nome: { this.state.nome } </Text>
            <Text>antonio@gmail.com {this.state.emial} </Text>
            <Text>casado { this.state.status</Text>
        </View>
        );
    }
}

export default BuscarDados;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// Criar mais na colecao de usuario e mostrar na tela do app 
// peso , altura, status (casado, solteiro, divorciado, uniao estavel)