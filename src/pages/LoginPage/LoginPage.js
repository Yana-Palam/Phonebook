import LoginForm from 'components/LoginForm';
import Section from 'components/Section';
import Container from 'components/Container';
import {
  selectIsRefreshing,
  selectUserIsLoading,
  selectUserError,
} from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { Wrapper, Title } from './LoginPage.styled';
import Loader from 'components/Loader';
import { toast } from 'react-toastify';

const LoginPage = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoading = useSelector(selectUserIsLoading);
  const error = useSelector(selectUserError);
  error && toast.error(error);

  return (
    !isRefreshing && (
      <>
        <Section>
          <Container>
            <Wrapper>
              <Title>Login</Title>
              <LoginForm />
            </Wrapper>
          </Container>
        </Section>
        {isLoading && !error && <Loader />}
      </>
    )
  );
};
export default LoginPage;
