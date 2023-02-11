import styled from 'styled-components';

export const H2 = styled.h2`
  margin: 20px;
  text-decoration: ${(props) => (props.userForm ? 'underline' : 'none')};
`;
