import styled from '@emotion/styled';

const getRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const SectionStatistics = styled.section`
  max-width: 300px;
  background-color: #fff;
  border: 1px solid grey;
  border-radius: 8px;
  box-shadow: 2px 2px 10px #e0e0e0;
`;

export const Title = styled.h2`
  padding: 12px;
  text-align: center;
`;

export const StatList = styled.ul`
  display: flex;
  list-style: none;
  padding: 8px;
  margin: 0px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  padding: 12px;
  margin: 0px;
  background-color: ${getRandomColor};
  color: white;
`;

export const Label = styled.span`
  margin-bottom: 8px;
`;

export const Percentage = styled.span`
  font-size: 18px;
`;
