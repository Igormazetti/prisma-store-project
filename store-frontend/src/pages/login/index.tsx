import { Box, Flex } from '@chakra-ui/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { setTokenState } from 'redux/store/tokenSlice';
import { setUserState } from 'redux/store/userSlice';
import { setCompanyState } from 'redux/store/companySlice';
import { useDispatch } from 'react-redux';
import { login } from 'service/login';
import { getCompany } from 'service/getCompany';
import { routes } from 'routes';
import { setCookie } from 'nookies';

export default function Login() {
  const dispatch = useDispatch();

  const { push } = useRouter();

  const handleRedirect = (route: string) => {
    push({ pathname: route });
  };

  const handleLoginRequest = async (email: string, password: string) => {
    const data = await login(email, password);
    if (data.user.email && data.user.password) {
      setCookie(undefined, 'token', data.token, {
        maxAge: 2592000,
      });

      const companyData = await getCompany(data.user.companyId);

      dispatch(setTokenState(data.token));
      dispatch(setUserState(data.user.name));
      dispatch(setCompanyState(companyData));

      localStorage.setItem('token', data.token);
      localStorage.setItem('userName', data.user.name);
      localStorage.setItem('companyName', JSON.stringify(companyData.name));
      localStorage.setItem('companyId', JSON.stringify(companyData.id));
      localStorage.setItem('companyData', JSON.stringify(companyData));

      handleRedirect(routes.dashboard);
    }
  };

  return (
    <Flex
      bg="rgb(215,215,215);"
      bgImage="linear-gradient(144deg, #d6d3d3 64%, rgba(17,64,77,1) 97%)"
      w="100%"
      h="full"
      p={4}
      color="white"
      align="center"
      justify="center"
    >
      <Flex
        bg="rgba(255, 255, 255, .3)"
        backdrop-filter="blur(5px)"
        justifyContent="center"
        maxW="600"
        w="full"
        h="600"
        rounded="25"
        opacity="0.5"
        p="15"
      >
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email('Invalid email address')
              .required('Required'),
            password: Yup.string()
              .min(5, 'Senha deve ter ao menos cinco caracteres')
              .max(10, 'Senha deve ter no máximo dez caracteres')
              .required('Required'),
          })}
          onSubmit={({ email, password }) =>
            handleLoginRequest(email, password)
          }
        >
          {({ isSubmitting }) => (
            <Form className="formularios">
              <label className="form-label" htmlFor="email">
                Email
                <Field className="formik-input" type="email" name="email" />
              </label>
              <ErrorMessage name="email" component="div" />

              <label className="form-label" htmlFor="password">
                Senha
                <Field
                  className="formik-input"
                  type="password"
                  name="password"
                />
              </label>
              <ErrorMessage name="password" component="div" />

              <Box
                as="button"
                h="50"
                w="100%"
                type="submit"
                disabled={isSubmitting}
                bg="#58a5bd"
              >
                Entrar
              </Box>
            </Form>
          )}
        </Formik>
      </Flex>
    </Flex>
  );
}
