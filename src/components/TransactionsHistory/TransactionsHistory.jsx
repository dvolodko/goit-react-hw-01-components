import PropTypes from 'prop-types';
import {
  TransactionsTable,
  TableHead,
  TableRow,
} from './TransactionsHistory.styled';

export const TransactionHistory = ({ items }) => (
  <TransactionsTable>
    <TableHead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </TableHead>

    <tbody>
      {items.map(item => (
        <TableRow key={item.id}>
          <td>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.currency}</td>
        </TableRow>
      ))}
    </tbody>
  </TransactionsTable>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
