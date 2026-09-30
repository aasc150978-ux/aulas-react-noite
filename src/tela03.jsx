import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
// Expo: já vem instalado. Sem Expo: npm i react-native-vector-icons e troque o import.
import { Ionicons } from '@expo/vector-icons';

const NOTICIAS_DATA = [
  {
    id: '1',
    titulo: 'Feira de Ciências 2026:\nInscrições Abertas!',
    categoria: 'Período',
    resumo:
      'Feira de Ciências 2026: Inscrições Abertas! Não perca a chance de participar e apresentar o seu projeto para toda a escola. Inscrições Abertas...',
    data: '15 Maio',
    imagem: require('../img/feira-ciencias.jpg'),
  },
  {
    id: '2',
    titulo: 'Comunicado: Alteração no\nHorário da Biblioteca',
    data: '14 Maio',
  },
];

const ABAS = [
  { key: 'inicio', label: 'Início', icon: 'home' },
  { key: 'noticias', label: 'Notícias', icon: 'newspaper' },
  { key: 'chat', label: 'Chat', central: true },
  { key: 'calendario', label: 'Calendário', icon: 'calendar' },
  { key: 'perfil', label: 'Perfil', icon: 'person' },
];

class Aula05 extends Component {
  constructor(props) {
    super(props);
    this.state = { abaAtiva: 'inicio' };
  }

  handleTabPress = (aba) => {
    this.setState({ abaAtiva: aba });
  };

  renderAba = (aba) => {
    const ativa = this.state.abaAtiva === aba.key;
    const cor = ativa ? '#5BB318' : '#FFFFFF';

    if (aba.central) {
      return (
        <TouchableOpacity
          key={aba.key}
          style={styles.botCentralContainer}
          onPress={() => this.handleTabPress(aba.key)}
          activeOpacity={0.8}
        >
          <View style={styles.botaoCentral}>
            <Image
              source={require('../img/logo-barao.png')}
              style={styles.logoCentral}
            />
          </View>
          <Text style={[styles.tabText, { color: cor }]}>{aba.label}</Text>
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity
        key={aba.key}
        style={styles.tabItem}
        onPress={() => this.handleTabPress(aba.key)}
        activeOpacity={0.7}
      >
        <Ionicons name={aba.icon} size={22} color={cor} />
        <Text style={[styles.tabText, { color: cor }]}>{aba.label}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#121212" />

        {/* Cabeçalho */}
        <View style={styles.header}>
          <Image
            source={require('../img/logo-barao.png')}
            style={styles.logoTopo}
          />
          <TouchableOpacity style={styles.botaoPerfil}>
            <Ionicons name="person-circle" size={34} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* Feed */}
        <ScrollView
          style={styles.feed}
          contentContainerStyle={styles.feedContent}
          showsVerticalScrollIndicator={false}
        >
          {NOTICIAS_DATA.map((item) => (
            <View key={item.id} style={styles.card}>
              {item.imagem && (
                <Image
                  source={item.imagem}
                  style={styles.imagemCard}
                  resizeMode="cover"
                />
              )}
              <View style={styles.corpoCard}>
                <Text style={styles.tituloCard}>{item.titulo}</Text>
                {item.categoria && (
                  <Text style={styles.categoriaCard}>{item.categoria}</Text>
                )}
                {item.resumo && (
                  <Text style={styles.resumoCard} numberOfLines={3}>
                    {item.resumo}
                  </Text>
                )}
                <Text style={styles.dataCard}>{item.data}</Text>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Barra inferior */}
        <View style={styles.bottomBarContainer}>
          <View style={styles.bottomBar}>{ABAS.map(this.renderAba)}</View>
          <View style={styles.faixaVerde}>
            <View style={styles.indicadorHome} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Aula05;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },

  // Cabeçalho
  header: {
    height: 64,
    backgroundColor: '#121212',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  logoTopo: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  botaoPerfil: {
    position: 'absolute',
    right: 16,
  },

  // Feed
  feed: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  feedContent: {
    padding: 12,
    paddingBottom: 50, // espaço para o botão central não cobrir o conteúdo
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    marginBottom: 14,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  imagemCard: {
    width: '100%',
    height: 190,
    borderRadius: 14,
  },
  corpoCard: {
    padding: 14,
  },
  tituloCard: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111111',
    lineHeight: 24,
    marginBottom: 6,
  },
  categoriaCard: {
    fontSize: 12,
    color: '#9A9A9A',
    marginBottom: 10,
  },
  resumoCard: {
    fontSize: 14,
    color: '#333333',
    lineHeight: 20,
    marginBottom: 12,
  },
  dataCard: {
    fontSize: 12,
    color: '#8E8E93',
    fontWeight: '500',
  },

  // Navegação inferior
  bottomBarContainer: {
    backgroundColor: '#121212',
    zIndex: 10,
    ...Platform.select({ android: { elevation: 10 } }),
  },
  bottomBar: {
    height: 62,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#121212',
    overflow: 'visible',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  tabText: {
    fontSize: 10,
    marginTop: 3,
  },

  // Botão central
  botCentralContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
    height: 62,
    overflow: 'visible',
  },
  botaoCentral: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: '#5BB318',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2,
    marginTop: -30,
    borderWidth: 4,
    borderColor: '#121212',
    overflow: 'hidden',
    zIndex: 20,
    ...Platform.select({ android: { elevation: 12 } }),
  },
  logoCentral: {
    width: '100%',
    height: '100%',
  },

  // Faixa verde inferior
  faixaVerde: {
    height: 28,
    backgroundColor: '#5BB318',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  indicadorHome: {
    width: 120,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#121212',
  },
});