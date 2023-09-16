import React from 'react';
import styled from 'styled-components';
import BarraInput from './componetns/BarraInput';
import CardMensagem from './componetns/CardMensagem';

const AppContainer = styled.div`
  background-color: #ece5dd;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MensagensContainer = styled.div`
  flex-grow: 1;
  padding: 10px;
  padding-left: 25%;
  padding-right: 25% ;
  backdrop-filter: blur(52px);
  display: flex;
  flex-direction: column;
  margin-bottom: 70px;
  overflow: auto;
`;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mensagens: [],
    };
  }

  handleEnviarMensagem = (nome, mensagem) => {
    const novaMensagem = { nome, mensagem };
    this.setState((prevState) => ({
      mensagens: [...prevState.mensagens, novaMensagem],
    }));
  };

  handleDeleteMensagem = (id) => {
    this.setState((prevState) => ({
      mensagens: prevState.mensagens.filter((mensagem, index) => index !== id),
    }));
  };

  render() {
    const { mensagens } = this.state;

    return (
      <AppContainer>
        <MensagensContainer>
          {mensagens.map((mensagem, index) => (
            <CardMensagem
              key={index}
              id={index}
              nome={mensagem.nome}
              mensagem={mensagem.mensagem}
              onDelete={this.handleDeleteMensagem}
            />
          ))}
        </MensagensContainer>
        <BarraInput Enviar={this.handleEnviarMensagem} />
      </AppContainer>
    );
  }
}

export default App;