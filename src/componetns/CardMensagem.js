import React from 'react';
import styled from 'styled-components';

const CardMensagemContainer = styled.div`
  background-color: ${({ remetente }) => (remetente.toLowerCase() === 'eu' ? '#007bff' : '#e0e0e0')};
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  color: ${({ remetente }) => (remetente.toLowerCase() === 'eu' ? '#fff' : 'inherit')};
  cursor: pointer;
  text-align: ${({ remetente }) => (remetente.toLowerCase() === 'eu' ? 'right' : 'left')};
  word-wrap: break-word; /* Adicione esta linha para ajustar o tamanho à mensagem */
`;

const NomeEnviado = styled.div`
  font-weight: bold;
`;

const BalaoMensagem = styled.div`
  margin-top: 5px;
`;

class CardMensagem extends React.Component {
  handleDoubleClick = () => {
    this.props.onDelete(this.props.id);
  };

  render() {
    const { nome, mensagem } = this.props;

    return (
      <CardMensagemContainer onDoubleClick={this.handleDoubleClick} remetente={nome}>
        {nome.toLowerCase() !== 'eu' && <NomeEnviado>{nome}</NomeEnviado>}
        <BalaoMensagem>{mensagem}</BalaoMensagem>
      </CardMensagemContainer>
    );
  }
}

export default CardMensagem;
