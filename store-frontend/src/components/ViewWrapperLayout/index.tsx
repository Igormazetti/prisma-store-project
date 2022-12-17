import Head from 'next/head';
import React from 'react';
import {
  Main,
  Sidebar,
  ChildrenContainer,
  Header,
  AsideButonsContainer,
  AsideButton,
} from './ViewWrapperLayout.styled';

type ViewWrapperLayoutProps = {
  children: React.ReactNode;
  title: string;
};

export default function ViewWrapperLayout({
  children,
  title,
}: ViewWrapperLayoutProps) {
  return (
    <>
      <Head>
        <title>Prisma Store Project</title>
      </Head>
      <Main>
        <Header>
          <h1>{title}</h1>
        </Header>
        <Sidebar>
          <AsideButonsContainer>
            <AsideButton>Produtos</AsideButton>
            <AsideButton>Vendas</AsideButton>
            <AsideButton>Usuário</AsideButton>
          </AsideButonsContainer>
          <ChildrenContainer>{children}</ChildrenContainer>
        </Sidebar>
      </Main>
    </>
  );
}
