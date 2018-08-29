import React, { Component } from "react";
import PropTypes from "prop-types";
import AddArtistForm from "./AddArtistForm";
import styled from "styled-components";
import ReactModal from "react-modal";

ReactModal.setAppElement('#root');

const ButtonContainer = styled.span`
  position: absolute;
  right: 10px;
  top: 10px;
`;

class FormModal extends Component {
  static propTypes = {
    showModal: PropTypes.bool.isRequired,
    onCloseModal: PropTypes.func.isRequired,
    onAddArtist: PropTypes.func.isRequired
  }
  
  render() { 
    const { showModal, onCloseModal, onAddArtist } = this.props;

    return ( 
      <ReactModal
        isOpen={showModal}
        contentLabel="Artist Add Form Modal"
        onRequestClose={onCloseModal}
        style={{
          content: {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            height: '50%',
            width: '50%',
            background: 'rgb(255, 255, 255)',
            overflow: 'auto',
            borderRadius: '4px',
            outline: 'none',
            padding: '20px',
          }
        }}
      >
        <AddArtistForm onSubmit={onAddArtist} />
        <ButtonContainer>
          <button onClick={onCloseModal} className="close"><span aria-hidden="true">&times;</span></button>
        </ButtonContainer>
      </ReactModal>
    );
  }
}
 
export default FormModal;
