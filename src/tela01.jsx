import React, { Component } from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  TextInput, 
  TouchableOpacity,
  Image
} from 'react-native';

class Aula05 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      senha: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>

        {/* Faixa escura no topo */}
        <View style={styles.faixaPreta} />

        <View style={styles.conteudo}>

          {/* Logo: metade na faixa, metade no fundo branco */}
          <Image
            source={require('../img/logo-barao.png')}
            style={styles.logo}
          />

          {/* Título e Subtítulo */}
          <Text style={styles.titulo}>Bem-vindo!</Text>
          <Text style={styles.subtitulo}>Acesse sua conta</Text>

          {/* Campos de Entrada */}
          <TextInput
            style={styles.input}
            placeholder='E-mail'
            placeholderTextColor='#8AA67A'
            keyboardType='email-address'
            autoCapitalize='none'
            onChangeText={(texto) => this.setState({ email: texto })}
          />

          <TextInput
            style={styles.input}
            placeholder='Senha'
            placeholderTextColor='#8AA67A'
            secureTextEntry={true}
            onChangeText={(texto) => this.setState({ senha: texto })}
          />

          {/* Esqueci minha senha */}
          <TouchableOpacity style={styles.linkEsqueci}>
            <Text style={styles.textoEsqueci}>Esqueci minha senha</Text>
          </TouchableOpacity>

          {/* Botão Entrar */}
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>Entrar</Text>
          </TouchableOpacity>

          {/* Rodapé fixo no fim da tela */}
          <View style={styles.containerRodape}>
            <Text style={styles.textoRodape}>Ainda não tem conta? </Text>
            <TouchableOpacity>
              <Text style={styles.linkCadastro}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    );
  }
}

export default Aula05;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  faixaPreta: {
    width: '100%',
    height: 130,
    backgroundColor: '#1A1A1A',
  },

  conteudo: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 25,
  },

  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: -50,      // metade da altura da logo
    marginBottom: 40,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
  },

  subtitulo: {
    fontSize: 24,
    color: '#333',
    textAlign: 'center',
    marginBottom: 50,
  },

  input: {
    width: '100%',
    height: 50,
    borderWidth: 1.5,
    borderColor: '#6FAE3E',   // borda verde
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 14,
    fontSize: 15,
    backgroundColor: '#FFFFFF',
    color: '#333',
  },

  linkEsqueci: {
    alignSelf: 'center',
    marginVertical: 12,
  },

  textoEsqueci: {
    color: '#222',
    fontSize: 14,
    textDecorationLine: 'underline',
  },

  botao: {
    backgroundColor: '#5CA916',   // verde do botão
    width: '100%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  textoBotao: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },

  containerRodape: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 'auto',    // empurra o rodapé para o fim da tela
    marginBottom: 30,
  },

  textoRodape: {
    color: '#333',
    fontSize: 14,
  },

  linkCadastro: {
    color: '#222',        // preto, como na imagem
    fontWeight: 'bold',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});