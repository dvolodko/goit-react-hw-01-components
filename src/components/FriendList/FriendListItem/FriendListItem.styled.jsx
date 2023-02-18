import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  padding: 8px;
  width: 300px;
  align-items: center;
  background-color: #fff;
  box-shadow: 2px 2px 10px #e0e0e0;
  border-radius: 8px;
`;

export const Status = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 100%;
  background-color: grey;
  margin-left: 16px;
  margin-right: 16px;
  background-color: ${props => (props.status === true ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  background-color: lightgray;
  border-radius: 8px;
  margin-right: 16px;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
