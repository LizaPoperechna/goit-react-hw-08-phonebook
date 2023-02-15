import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import defaultAvatar from './defaultAvatar.png';
import { Container, Avatar, Name } from './UserMenu.styled';
import { logOut } from 'redux/Auth/authOperations';



export const UserMenu = () => {
  const dispatch = useDispatch();
  const {user} = useAuth();
  const avatarImg = defaultAvatar;

  return (
    <Container >
      <Avatar src={avatarImg} alt="" width="32"/>
      <Name> Welcome, {user.name}</Name>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </button>
    </Container>
  );
}