import RegisterForm from 'components/RegisterForm';
import Section from 'components/Section';
import Container from 'components/Container';
import { Wrapper, Title } from './RegisterPage.styled';
import { selectUserIsLoading, selectUserError } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import Loader from 'components/Loader';
import { toast } from 'react-toastify';

const RegisterPage = () => {
  const isLoading = useSelector(selectUserIsLoading);
  const error = useSelector(selectUserError);
  error && toast.error(error);
  return (
    <>
      <Section>
        <Container>
          <Wrapper>
            <Title>Register</Title>
            <RegisterForm />
          </Wrapper>
        </Container>
      </Section>
      {isLoading && !error && <Loader />}
    </>
  );
};
export default RegisterPage;
