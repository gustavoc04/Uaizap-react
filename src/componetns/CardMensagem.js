import React from 'react';
import styled from 'styled-components';

const CardMensagemContainer = styled.div`
  background-color: ${({ remetente }) => remetente.toLowerCase().trim() === 'eu' ? '#dcf8c6' : '#ffffff'};
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
  display: inline-block;
  cursor: pointer;
  text-align: ${({ remetente }) => (remetente.toLowerCase().trim() === 'eu' ? 'right' : 'left')};
  align-self: ${({ remetente }) => (remetente.toLowerCase().trim() === 'eu' ? 'flex-end' : 'flex-start')};
  word-wrap: break-word;
  box-shadow: rgba(0, 0, 0, 0.13) 0px 1px 0.5px;
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
        {nome.toLowerCase().trim() !== 'eu' && <NomeEnviado>{nome}</NomeEnviado>}
        <BalaoMensagem>{mensagem}</BalaoMensagem>
      </CardMensagemContainer>
    );
  }
}

export default CardMensagem;
