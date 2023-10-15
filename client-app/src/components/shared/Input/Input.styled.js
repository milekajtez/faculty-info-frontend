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

export const SelectWrapper = styled.div`
  position: relative;
  width: 263px;
  text-align: center;
`;

export const SelectBox = styled.div`
  background-color: aliceblue;
  height: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 2px solid ${(props) => (props.isValid === true ? 'black' : 'red')};
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  cursor: pointer;

  &.open {
    border-bottom: 1px solid #ccc;
    border-radius: 5px 5px 0 0;
  }
`;

export const SelectedOptions = styled.span`
  flex: 1;
  color: gray;
`;

export const Options = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  border: 1px solid #ccc;
  overflow-y: auto;
  background-color: aliceblue;
`;

export const OptionLabel = styled.label`
  display: block;
  padding: 15px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`;

export const InputMessageElement = styled.div`
  color: red;
`;
