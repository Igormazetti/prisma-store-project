import Head from 'next/head';
import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { destroyCookie } from 'nookies';
import { setTokenState } from 'redux/store/tokenSlice';
import { setUserState } from 'redux/store/userSlice';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import {
  Main,
  Sidebar,
  ChildrenContainer,
  AsideContainer,
  AsideButton,
  ButtonContainer,
  LogoContainer,
  Logo,
  ExitButton,
} from './ViewWrapperLayout.styled';

type ViewWrapperLayoutProps = {
  children: React.ReactNode;
};

export default function ViewWrapperLayout({
  children,
}: ViewWrapperLayoutProps) {
  const dispatch = useDispatch();
  const { push } = useRouter();

  const goblin =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD6DB7ZP_sHF2U7ePMDemT2vmMFtJqYTtU744iMDE2XwXkJR2kECzs11A2xutUMpMSmoM&usqp=CAU';

  const handleLogout = () => {
    destroyCookie(undefined, 'token', { path: '/' });
    dispatch(setTokenState(''));
    dispatch(setUserState(''));
    push('/');
  };

  const handleRedirect = (route: string) => {
    push({ pathname: route })
  }

  return (
    <>
      <Head>
        <title>Prisma Store Project</title>
      </Head>
      <Main data-testid="view-wrapper">
        <Sidebar data-testid="view-wrapper-sidebar">
          <AsideContainer>
            <LogoContainer>
              <Logo data-testid="view-wrapper-logo" src={goblin} />
            </LogoContainer>
            <ButtonContainer>
              <AsideButton data-testid="produtos-btn" onClick={() => handleRedirect("produtos")}>Produtos</AsideButton>
              <AsideButton data-testid="vendas-btn">Vendas</AsideButton>
              <AsideButton data-testid="usuario-btn">Usuário</AsideButton>
            </ButtonContainer>
            <ExitButton onClick={handleLogout}>
              <FiLogOut size={20} />
              Sair
            </ExitButton>
          </AsideContainer>
          <ChildrenContainer>{children}</ChildrenContainer>
        </Sidebar>
      </Main>
    </>
  );
}
