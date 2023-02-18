import styled from '@emotion/styled';

export const TransactionsTable = styled.table`
  table-layout: initial;
  width: 600px;
  background-color: #fff;
  border: 1px solid gray;
  border-radius: 4px;
  text-align: center;
  color: #000;
`;

export const TableHead = styled.thead`
  background-color: #97fcf7;
`;

export const TableRow = styled.tr`
  :nth-of-type(even) {
    background-color: #9683ff;
  }
`;
