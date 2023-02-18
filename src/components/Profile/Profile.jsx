import PropTypes from 'prop-types';
import { FaMapMarkedAlt } from 'react-icons/fa';
import {
  Container,
  Description,
  Avatar,
  Name,
  TagName,
  Location,
  StatusList,
  StatusItem,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({
  user: {
    avatar,
    username,
    tag,
    location,
    stats: { followers, views, likes },
  },
}) => (
  <Container>
    <Description>
      <Avatar src={avatar} alt={username} />
      <Name>{username}</Name>
      <TagName>@{tag}</TagName>
      <Location>
        <FaMapMarkedAlt />
        {location}
      </Location>
    </Description>

    <StatusList>
      <StatusItem>
        <Label>Followers</Label>
        <Quantity>{followers}</Quantity>
      </StatusItem>
      <StatusItem>
        <Label>Views</Label>
        <Quantity>{views}</Quantity>
      </StatusItem>
      <StatusItem>
        <Label>Likes</Label>
        <Quantity>{likes}</Quantity>
      </StatusItem>
    </StatusList>
  </Container>
);

Profile.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
