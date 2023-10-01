import React from 'react';
import Modal from 'react-modal';
import { ModalCloseButton, customStyles } from './ModalComponent.styled';
import iconClose from '../../../images/modal_close.jpg';
import { Logo } from '../../Navbar/Logo/Logo';
import { ModalType } from '../../../enums/ModalType';
import { CreateFaculty } from '../../Faculty/Faculties/CreateFaculty';
import { EditFaculty } from '../../Faculty/Faculties/EditFaculty';
import { CreateFacultyAdmin } from '../../Faculty/FacultyAdmins/CreateFacultyAdmin';

Modal.setAppElement('#root');

export function ModalComponent(props) {
  const { isOpen, closeModal, type, data } = props;

  const renderModalContent = (type) => {
    return type === ModalType.CreateFaculty ? (
      <CreateFaculty closeModal={closeModal}></CreateFaculty>
    ) : type === ModalType.EditFaculty ? (
      <EditFaculty closeModal={closeModal} data={data}></EditFaculty>
    ) : type === ModalType.CreateFacultyAdmin ? (
      <CreateFacultyAdmin closeModal={closeModal}></CreateFacultyAdmin>
    ) : (
      <></>
    );
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <ModalCloseButton>
        <Logo iconImage={iconClose} logoWidth={60} logoHeight={60} onClickMethod={closeModal} />
      </ModalCloseButton>
      {renderModalContent(type)}
    </Modal>
  );
}
