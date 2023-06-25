import styled from 'styled-components';

export const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    height: '60%'
  },
  overlay: {
    backgroundColor: 'rgb(0 0 0 / 75%)'
  }
};

export const ModalCloseButton = styled.button`
  position: absolute;
  right: 32px;
  background-color: transparent;
  border: 0;
`;
