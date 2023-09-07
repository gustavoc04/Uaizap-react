import React from 'react';
import styled from 'styled-components';

const MensagemFormContainer = styled.div`
  background-color: #f0f0f0;
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
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`;

const NomeInputField = styled.input`
  padding: 8px;
  width: 100px;
  opacity: 0.7;
`;

const MensagemInputField = styled.input`
  padding: 8px;
  width: 200px;
  opacity: 0.7;
`;

const EnviarButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
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
    this.props.onEnviar(nome, mensagem);
    this.setState({ nome: '', mensagem: '' });
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
            placeholder="Nome" // Adiciona o placeholder "Nome"
          />
        </InputContainer>
        <InputContainer>
          <InputLabel></InputLabel>
          <MensagemInputField
            type="text"
            value={mensagem}
            onChange={this.handleMensagemChange}
            placeholder="Mensagem" // Adiciona o placeholder "Mensagem"
          />
        </InputContainer>
        <EnviarButton onClick={this.handleEnviarClick}>Enviar</EnviarButton>
      </MensagemFormContainer>
    );
  }
}

export default BarraInput;
