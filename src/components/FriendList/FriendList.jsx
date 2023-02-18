import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem/FriendListItem';
import { Friends } from './FriendList.styled';

export const FriendList = ({ friends }) => (
  <Friends>
    {friends.map(friend => (
      <FriendListItem friend={friend} key={friend.id} />
    ))}
  </Friends>
);

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
