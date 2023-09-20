import React from 'react';
import styled from 'styled-components';


const MensagemFormContainer = styled.div`
  background-color: #ece5dd;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 8px;
  padding: 10px;
  padding-left: 51%;
  padding-right: 51%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 600px;
  margin: 0 auto;
`;

const InputLabel = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  justify-content: space-between;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  flex-grow: 1;
`;

const NomeInputField = styled.input`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 15px;
  width: 80px;
  border-radius: 6px;
  border: none;

  @media (max-width: 600px) {
    width: 80px;
  }
`;

const TextoInputField = styled.input`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 15px;
  width: 380px;
  border-radius: 6px;
  border: none;

  @media (max-width: 600px) {
    width: 240px;
  }
`;

const BotaoEnviar = styled.button`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: #128c7e;
  border: none;
  padding: 15px 16px;
  border-radius: 6px;
  cursor: pointer;
`;

class MensagemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      texto: '',
    };
  }

  handleNomeChange = (e) => {
    this.setState({ nome: e.target.value });
  };

  handleTextoChange = (e) => {
    this.setState({ texto: e.target.value });
  };

  handleBotaoEnviar = () => {
    const { nome, texto } = this.state;
    
    if (nome.trim() === '' || texto.trim() === '') {
      alert('Você precisa preencher o campo de remetente e digitar uma mensagem para envia-la.');
      return;
    }
    
    this.props.Enviar(nome, texto);
    this.setState({ nome: '', texto: '' });
  };

  handleEnviarComEnter = (e) => {
    if (e.key === 'Enter') {
      this.handleBotaoEnviar();
    }
  };

  render() {
    const { nome, texto } = this.state;

    return (
      <MensagemFormContainer>
        <InputContainer>
          <InputLabel></InputLabel>
          <NomeInputField
            type="text"
            value={nome}
            onChange={this.handleNomeChange}
            onKeyPress={this.handleEnviarComEnter}
            placeholder="Nome"
          />
        </InputContainer>
        <InputContainer>
          <InputLabel></InputLabel>
          <TextoInputField
            type="text"
            value={texto}
            onChange={this.handleTextoChange}
            onKeyPress={this.handleEnviarComEnter}
            placeholder="Digite uma mensagem"
          />
        </InputContainer>
        <BotaoEnviar onClick={this.handleBotaoEnviar}>Enviar</BotaoEnviar>
      </MensagemFormContainer>
    );
  }
}

export default MensagemForm;

