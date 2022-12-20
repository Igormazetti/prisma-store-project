import React from 'react';
import { MainContainer, HeaderContainer } from './dashboard.styled';
import ViewWrapperLayout from '../../components/ViewWrapperLayout';

export default function Dashboard() {
  return (
    <ViewWrapperLayout>
      <MainContainer>
        <HeaderContainer>
          <div>Icon</div>
          <div>Olá usuário</div>
        </HeaderContainer>
        <h1>Bem vindo(a) ao Prisma Store Project!</h1>
        <span>
          Este site possui a finalidade de auxiliar lojas e seus funionários a
          realizarem o controle de estoque e vendas realizadas.
        </span>
      </MainContainer>
    </ViewWrapperLayout>
  );
}
