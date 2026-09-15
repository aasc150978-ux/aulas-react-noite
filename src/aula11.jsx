import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';

class Aula11 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        campo1: '',
        campo2: '',
        resultado: ''
      
    }
    this.salvaNoBanco = this.salvaNoBanco.bind(this);
  }

  async salvaNoBanco(){
    const{ campo1, campo2 } = this.state;

    if( !campo1 || !campo2 ) {
        Alert.alert('Atenção', 'Preencha todos os campos!');
        return;
    }

    const IP_DA_SUA_MAQUINA = 'https://192.168.0.139:3000';

    try {
        const response = await fetch(`${IP_DA_SUA_MAQUINA}/salvar` ,{
            method: 'POST',
            headers: {
                'Content-Type': 'aplication/json'
            },
            body: JSON.stringify({campo1, campo2})
        });

        if (response.ok) {
            this.setState({
                resultado:`${campo1} ${campo2}`
            });
            Alert.alert('Sucesso ', 'Dados salvos no MySQL!')
        }else{
            Alert.alert('Erro', 'Falha ao salvar os dados')
        }

    }catch(error){
        ALert.alert('Erros', 'Não foi possivel conectar ao srvidor backend.')

    }
        
  }


  render() {
    return (
      <View style={styles.container}>
        <Text></Text>
      </View>
    );
  }
}
w
export default Aula11;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

