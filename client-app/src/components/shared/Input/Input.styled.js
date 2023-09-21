import styled from 'styled-components';

const inputBaseStyles = `
  background-color: aliceblue;
  padding: 15px 32px;
  text-align: center;
  font-size: 16px;
  margin: 5px;
  border: 2px solid ${(props) => (props.isValid === true ? 'black' : 'red')};
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px;
  border-radius: 5px;
`;

export const InputElement = styled.input`
  ${inputBaseStyles}
`;

export const TextAreaElement = styled.textarea`
  ${inputBaseStyles}
`;

export const InputMessageElement = styled.div`
  color: red;
`;
