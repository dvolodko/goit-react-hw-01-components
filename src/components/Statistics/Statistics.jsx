import PropTypes from 'prop-types';
import {
  SectionStatistics,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, data }) => (
  <SectionStatistics>
    <Title>{title}</Title>

    <StatList>
      {data.map(item => (
        <Item key={item.id}>
          <Label>{item.label}</Label>
          <Percentage>{item.percentage}%</Percentage>
        </Item>
      ))}
    </StatList>
  </SectionStatistics>
);

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
