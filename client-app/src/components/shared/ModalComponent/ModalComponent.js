import React from 'react';
import Modal from 'react-modal';
import { ModalCloseButton, customStyles } from './ModalComponent.styled';
import iconClose from '../../../images/modal_close.jpg';
import { Logo } from '../../Navbar/Logo/Logo';

Modal.setAppElement('#root');

export function ModalComponent(props) {
  const { isOpen, closeModal } = props;
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <ModalCloseButton onClick={closeModal}>
        <Logo iconImage={iconClose} logoWidth={60} logoHeight={60} />
      </ModalCloseButton>
    </Modal>
  );
}
