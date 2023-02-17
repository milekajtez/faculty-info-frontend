import styled from 'styled-components';

export const UserFormWrapper = styled.div`
  border-radius: 10px 10px 10px 10px;
  position: relative;
  text-align: center;
  display: inline-block;
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;

  @keyframes fadeInDown {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }
    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }
`;

export const UserFormContent = styled.div`
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  padding: 30px;
  max-width: 450px;
  position: relative;
  text-align: center;
  background-color: transparent;
`;

export const UserFormTitle = styled.div`
  display: inline-flex;
`;
