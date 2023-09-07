import React from 'react';
import styled from 'styled-components';
import CardMensagem from './componetns/CardMensagem';
import BarraInput from './componetns/BarraInput';

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const MensagensContainer = styled.div`
  width: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mensagens: [],
    };
  }

  adicionarMensagem = (nome, mensagem) => {
    const { mensagens } = this.state;
    const novaMensagem = {
      id: new Date().getTime(),
      nome,
      mensagem,
    };
    this.setState({ mensagens: [...mensagens, novaMensagem] });
  };

  removerMensagem = (id) => {
    const { mensagens } = this.state;
    const mensagensFiltradas = mensagens.filter((mensagem) => mensagem.id !== id);
    this.setState({ mensagens: mensagensFiltradas });
  };

  render() {
    const { mensagens } = this.state;

    return (
      <AppContainer>
        <MensagensContainer>
          {mensagens.map((mensagem) => (
            <CardMensagem
              key={mensagem.id}
              id={mensagem.id}
              nome={mensagem.nome}
              mensagem={mensagem.mensagem}
              onDelete={this.removerMensagem}
            />
          ))}
        </MensagensContainer>
        <BarraInput onEnviar={this.adicionarMensagem} />
      </AppContainer>
    );
  }
}

export default App;
