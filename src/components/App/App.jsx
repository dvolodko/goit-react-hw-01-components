import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionsHistory/TransactionsHistory';
import user from '../Profile/user.json';
import data from '../Statistics/data.json';
import friends from '../FriendList/friends.json';
import items from '../TransactionsHistory/transactions.json';
import { Container } from './App.styled';

export const App = () => {
  return (
    <>
      <Container>
        <Profile user={user} />
        <Statistics title="Upload stats" data={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={items} />
      </Container>
    </>
  );
};
