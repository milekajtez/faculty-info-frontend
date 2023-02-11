import styled from 'styled-components';

export const ButtonElement = styled.button`
  background-color: orange;
  color: white;
  padding: 15px 80px;
  text-decoration: none;
  text-transform: uppercase;
  -webkit-box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
  box-shadow: 10px 10px 30px 0 rgba(95, 186, 233, 0.4);
  border-radius: 5px 5px 5px 5px;
  margin: 5px 20px 40px 20px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;

  :hover {
    background-image: linear-gradient(90deg, #ff8a00, #c8305f);
  }

  :active {
    -moz-transform: scale(0.95);
    -webkit-transform: scale(0.95);
    -o-transform: scale(0.95);
    -ms-transform: scale(0.95);
    transform: scale(0.95);
  }
`;
