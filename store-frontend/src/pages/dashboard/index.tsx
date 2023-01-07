import React from 'react';
import { MainContainer, SpanContainer } from './dashboard.styled';
import ViewWrapperLayout from '../../components/ViewWrapperLayout';
import Header from 'components/Header';
import { GetServerSideProps } from 'next';
import { userAuthHook } from 'Hooks/userAuthHook';

export default function Dashboard() {
  return (
    <ViewWrapperLayout>
      <Header />
      <MainContainer>
        <h1>Bem vindo(a) ao Prisma Store Project!</h1>
        <SpanContainer>
          Este site possui a finalidade de auxiliar lojas e seus funcionários a
          realizarem o controle de estoque e vendas realizadas.
        </SpanContainer>
        <SpanContainer>
          Na tela de produtos, é possível encontrar todos os produtos
          cadastrados na loja, visualizar quantidade em estoque, e valor de cada
          um.
        </SpanContainer>
        <SpanContainer>
          Na tela de vendas, é possível realizar novas vendas, além de
          visualizar as vendas feitas pelo usuário.
        </SpanContainer>
        <SpanContainer>
          Por fim, a tela do usuário permite que a pessoa altere a senha da
          conta.
        </SpanContainer>
      </MainContainer>
    </ViewWrapperLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) =>
  userAuthHook(ctx);
