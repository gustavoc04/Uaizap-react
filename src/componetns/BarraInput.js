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

const MensagemInputField = styled.input`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 15px;
  width: 380px;
  border-radius: 6px;
  border: none;

  @media (max-width: 600px) {
    width: 240px;
  }
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
      texto: '',
    };
  }

  handleNomeChange = (e) => {
    this.setState({ nome: e.target.value });
  };

  handleMensagemChange = (e) => {
    this.setState({ texto: e.target.value });
  };

  handleEnviarClick = () => {
    const { nome, texto } = this.state;
    
    if (nome.trim() === '' || texto.trim() === '') {
      alert('Por favor, preencha o campo de remetente e mensagem.');
      return;
    }
    
    this.props.Enviar(nome, texto);
    this.setState({ nome: '', texto: '' });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleEnviarClick();
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
            onKeyPress={this.handleKeyPress}
            placeholder="Nome"
          />
        </InputContainer>
        <InputContainer>
          <InputLabel></InputLabel>
          <MensagemInputField
            type="text"
            value={texto}
            onChange={this.handleMensagemChange}
            onKeyPress={this.handleKeyPress}
            placeholder="Digite uma mensagem"
          />
        </InputContainer>
        <EnviarButton onClick={this.handleEnviarClick}>Enviar</EnviarButton>
      </MensagemFormContainer>
    );
  }
}

export default BarraInput;

