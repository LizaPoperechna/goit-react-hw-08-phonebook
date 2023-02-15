import { useDispatch } from 'react-redux';
import { register } from 'redux/Auth/authOperations';
import { Form, Label, Input, Button, Container } from './RegisterForm.styled';



export const RegisterForm = () => {

    const dispatch = useDispatch();

    const handleSubmit = e => {
      e.preventDefault();
      const form = e.currentTarget;
      dispatch(
        register({
          name: form.elements.name.value,
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
      form.reset();
    }

 return (
  <Container>
          <Form onSubmit={handleSubmit} autoComplete="off">
              <Label>
                Username
                <Input type="text" name="name" />
              </Label>
              <Label>
                Email
                <Input type="email" name="email" />
              </Label>
              <Label>
                Password
                <Input type="password" name="password" />
              </Label>
              <Button type="submit">Register</Button>
          </Form>
  </Container>

          )
        }