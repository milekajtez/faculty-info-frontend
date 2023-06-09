import styled from 'styled-components';

export const TableWrapper = styled.section`
  max-width: 70%;
  margin: 0 auto;
  max-height: 625px;
  background-color: aliceblue;
  border: 1px solid black;
`;

export const TableHeader = styled.div`
  background-image: linear-gradient(90deg, #ff8a00, #c8305f);
`;

export const TableComponent = styled.table`
  width: 100%;
  table-layout: fixed;
`;

export const TheadComponent = styled.thead`
  font-weight: bold;
`;

export const TableField = styled.th`
  padding: 20px 15px;
  text-align: center;
  font-weight: bold;
  font-size: 15px;
  color: black;
  text-transform: uppercase;
`;

export const TableContent = styled.div`
  background-color: whitesmoke;
  overflow-y: scroll;
  max-height: 532px;

  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  }
  ::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  }
`;

export const TableRow = styled.tr``;
export const TableBody = styled.tbody``;
