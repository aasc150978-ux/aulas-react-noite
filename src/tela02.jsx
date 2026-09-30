import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

const CAMPOS = [
  { chave: 'nome', texto: 'Nome Completo' },
  { chave: 'email', texto: 'E-mail' },
  { chave: 'senha', texto: 'Senha' },
  { chave: 'confirmar', texto: 'Confirmar Senha' },
];

const TIPOS = ['Aluno', 'Responsável', 'Professor'];

class Aula05 extends Component {
  state = { nome: '', email: '', senha: '', confirmar: '', tipo: 'Aluno' };

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.faixa}>
          <Image source={require('../img/logo-barao.png')} style={styles.logo} />
        </View>

        <View style={styles.conteudo}>

          <Text style={styles.titulo}>Crie sua conta</Text>
          <Text style={styles.subtitulo}>Preencha os dados</Text>

          {CAMPOS.map(({ chave, texto }) => (
            <TextInput
              key={chave}
              style={[styles.caixa, styles.input]}
              placeholder={texto}
              placeholderTextColor='#8AA67A'
              autoCapitalize={chave === 'email' ? 'none' : 'sentences'}
              keyboardType={chave === 'email' ? 'email-address' : 'default'}
              secureTextEntry={chave === 'senha' || chave === 'confirmar'}
              onChangeText={(valor) => this.setState({ [chave]: valor })}
            />
          ))}

          <Text style={styles.label}>Tipo de Usuário</Text>
          <View style={[styles.caixa, styles.seletor]}>
            {TIPOS.map((tipo) => (
              <TouchableOpacity key={tipo} onPress={() => this.setState({ tipo })}>
                <Text style={[styles.opcao, this.state.tipo === tipo && styles.opcaoAtiva]}>
                  {tipo}
                </Text>
              </TouchableOpacity>
            ))}
            <View style={styles.seta} pointerEvents='none'>
              <Text style={styles.textoSeta}>⌄</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>Cadastrar</Text>
          </TouchableOpacity>

          <View style={styles.rodape}>
            <Text style={styles.textoRodape}>Já tem uma conta? </Text>
            <TouchableOpacity>
              <Text style={[styles.textoRodape, styles.link]}>Faça login</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    );
  }
}

export default Aula05;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },

  faixa: {
    height: 90,
    backgroundColor: '#1A1A1A',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 10,
  },
  logo: { width: 55, height: 55, borderRadius: 27.5 },

  conteudo: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingTop: 15,
    paddingBottom: 15,
  },

  titulo: { fontSize: 26, fontWeight: 'bold', color: '#222' },
  subtitulo: { fontSize: 20, color: '#333', marginBottom: 15 },

  // estilo comum: inputs e seletor
  caixa: {
    width: '100%',
    borderWidth: 1.5,
    borderColor: '#6FAE3E',
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
  },
  input: { height: 44, marginBottom: 10, fontSize: 15, color: '#333' },

  label: { alignSelf: 'flex-start', fontSize: 14, color: '#222', marginBottom: 5 },

  seletor: { paddingVertical: 6 },
  opcao: { fontSize: 15, color: '#222', paddingVertical: 5 },
  opcaoAtiva: { fontWeight: 'bold' },
  seta: { position: 'absolute', right: 15, top: 0, bottom: 0, justifyContent: 'center' },
  textoSeta: { fontSize: 22, color: '#333' },

  botao: {
    width: '100%',
    height: 44,
    marginTop: 15,
    borderRadius: 8,
    backgroundColor: '#5CA916',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBotao: { color: '#FFF', fontWeight: 'bold', fontSize: 17 },

  rodape: { flexDirection: 'row', marginTop: 'auto' },
  textoRodape: { color: '#333', fontSize: 14 },
  link: { color: '#222', fontWeight: 'bold', textDecorationLine: 'underline' },
});