import React from 'react';
import { MainContainer, HeaderContainer } from './dashboard.styled';
import ViewWrapperLayout from '../../components/ViewWrapperLayout';
import Header from 'components/Header';
import { GetServerSideProps } from 'next';
import { userAuthHook } from 'Hooks/userAuthHook';

export default function Dashboard() {
  return (
    <ViewWrapperLayout>
      <MainContainer>
        <Header />
        <h1>Bem vindo(a) ao Prisma Store Project!</h1>
        <span>
          Este site possui a finalidade de auxiliar lojas e seus funionários a
          realizarem o controle de estoque e vendas realizadas.
        </span>
      </MainContainer>
    </ViewWrapperLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) =>
  userAuthHook(ctx);
