import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Header, Container } from './AppBar.styled';
import { useAuth } from 'hooks/useAuth';



export const AppBar = () => {
const { isLoggedIn } = useAuth();
  
  return (
    <Header>
        <Container>
            <Navigation />
            <div>{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>
        </Container>
    </Header>
  );
}

