import React, { Component } from 'react';
import { View, Text, StyleSheet,  ScrollView, Button, Image} from 'react-native';


class Aula06 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: 'Antonio Augusto',
      sobrenome: '',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm54FlG-LkZnL3TGAwGHveR7FLmFltkwZJA_x0oPRKZwqYgLrZMiU9EdWpy2BFoiceHGfvJLUCobFF5x9RQiJFypZuBV_a2PO_WM8zaBc&s=10'
    }

    this.mudarNome = this.mudarNome.bind(this);
    this.mudarImagem = this.mudarImagem.bind(this);

  }

  mudarNome() {
    this.setState({ 
      nome: 'Ronaldinho Gaúcho',
      sobrenome:'De Souza Cruz'
    })

  }

  mudarImagem() {
    this.setState({
      imagem: 'https://assets.goal.com/images/v3/blt77343c47650bbfc1/2342f72fb9136c85780213e2ad65de2843a40911.jpg?auto=webp&format=pjpg&width=3840&quality=60'
    })
  }
  
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum quos, labore repellendus beatae incidunt accusantium odio, aliquid non 
            tenetur quis et blanditiis illo enim mollitia sunt eos eligendi, architecto culpa.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum quos, labore repellendus
             beatae incidunt accusantium odio, aliquid non tenetur quis et blanditiis illo enim mollitia sunt eos eligendi, architecto culpa.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum quos, labore repellendus
             beatae incidunt accusantium odio, aliquid non tenetur quis et blanditiis illo enim mollitia sunt eos eligendi, architecto culpa.
          </Text>

          <Text style={{ fontiSize: 21, color: 'red',marginTop: 50}}>
            {this.state.nome} { this.state.sobrenome}
          </Text>

          <Button
            title='Mostrar nome'
            onPress={ this.mudarNome }            
          />

          <Image
            source={{ uri: this.state.imagem }}
            style={{width: 300, height: 300}}
          />

          <Button
            title='Mostrar Imagem'
            onPress={ this.mudarImagem }            
          />

        </ScrollView>
      </View>
    );
  }
}

export default Aula06;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//colocar o sobrenome e fazer aparecer no click do button