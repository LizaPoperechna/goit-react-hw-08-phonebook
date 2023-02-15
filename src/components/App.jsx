import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchCurrentUser } from 'redux/Auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import { Layout } from "./Layout";
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { Container } from './App.styled';


const HomeView = lazy(() => import('../pages/homeView'));
const RegisterView = lazy(() => import('../pages/registerView'));
const LoginView = lazy(() => import('../pages/loginView'));
const ContactsView = lazy(() => import('../pages/contactsView'));
const NotFoundPage = lazy(() => import('./NotFound/NotFound'));





export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

 return (
  
  <Container> 

    {isRefreshing 
      ? (<b>Refreshing user...</b>) 
      : (<Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeView/>} />
            <Route
              path="/register"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<RegisterView />} />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<LoginView />} />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<ContactsView />} />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>)
}
  </Container>

  )}