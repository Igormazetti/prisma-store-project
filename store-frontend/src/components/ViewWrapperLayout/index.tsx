import Head from 'next/head';
import React from 'react';
import {
  Main,
  Sidebar,
  ChildrenContainer,
  AsideContainer,
  AsideButton,
  ButtonContainer,
  LogoContainer,
  Logo,
} from './ViewWrapperLayout.styled';

type ViewWrapperLayoutProps = {
  children: React.ReactNode;
  title: string;
};

export default function ViewWrapperLayout({
  children,
  title,
}: ViewWrapperLayoutProps) {
  const goblin =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD6DB7ZP_sHF2U7ePMDemT2vmMFtJqYTtU744iMDE2XwXkJR2kECzs11A2xutUMpMSmoM&usqp=CAU';
  return (
    <>
      <Head>
        <title>Prisma Store Project</title>
      </Head>
      <Main>
        <Sidebar>
          <AsideContainer>
            <LogoContainer>
              <Logo src={goblin} />
            </LogoContainer>
            <ButtonContainer>
              <AsideButton>Produtos</AsideButton>
              <AsideButton>Vendas</AsideButton>
              <AsideButton>Usuário</AsideButton>
            </ButtonContainer>
          </AsideContainer>
          <ChildrenContainer>{children}</ChildrenContainer>
        </Sidebar>
      </Main>
    </>
  );
}
