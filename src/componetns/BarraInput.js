import React from 'react';
import styled from 'styled-components';

const MensagemFormContainer = styled.div`
  background-color: #ece5dd;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 8px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
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
`;

const NomeInputField = styled.input`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 15px;
  width: 100px;
  border-radius: 6px;
  border: none;
`;

const MensagemInputField = styled.input`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 15px;
  width: 420px;
  border-radius: 6px;
  border: none;
`;

const EnviarButton = styled.button`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: #128c7e;
  border: none;
  padding: 15px 16px;
  border-radius: 6px;
  cursor: pointer;
`;

class BarraInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      mensagem: '',
    };
  }

  handleNomeChange = (e) => {
    this.setState({ nome: e.target.value });
  };

  handleMensagemChange = (e) => {
    this.setState({ mensagem: e.target.value });
  };

  handleEnviarClick = () => {
    const { nome, mensagem } = this.state;
    
    if (nome.trim() === '' || mensagem.trim() === '') {
      alert('Por favor, preencha o campo de remetente e mensagem.');
      return;
    }
    
    this.props.Enviar(nome, mensagem);
    this.setState({ nome: '', mensagem: '' });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleEnviarClick();
    }
  };

  render() {
    const { nome, mensagem } = this.state;

    return (
      <MensagemFormContainer>
        <InputContainer>
          <InputLabel></InputLabel>
          <NomeInputField
            type="text"
            value={nome}
            onChange={this.handleNomeChange}
            onKeyPress={this.handleKeyPress}
            placeholder="Nome"
          />
        </InputContainer>
        <InputContainer>
          <InputLabel></InputLabel>
          <MensagemInputField
            type="text"
            value={mensagem}
            onChange={this.handleMensagemChange}
            onKeyPress={this.handleKeyPress}
            placeholder="Mensagem"
          />
        </InputContainer>
        <EnviarButton onClick={this.handleEnviarClick}>Enviar</EnviarButton>
      </MensagemFormContainer>
    );
  }
}

export default BarraInput;

