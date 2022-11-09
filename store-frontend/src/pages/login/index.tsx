import { Box, Flex, Text } from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Router from "next/router";

export default function Login() {
  const redirectCriarConta = () => {
    Router.push("/criarconta");
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
          initialValues={{ email: "", password: "" }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string()
              .min(5, "Senha deve ter ao menos cinco caracteres")
              .max(10, "Senha deve ter no máximo dez caracteres")
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
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
              <Box
                h="50"
                color="#000102"
                bg="#58a5bd"
                w="100%"
                as="button"
                type="button"
                onClick={redirectCriarConta}
              >
                Criar conta
              </Box>
            </Form>
          )}
        </Formik>
      </Flex>
    </Flex>
  );
}
