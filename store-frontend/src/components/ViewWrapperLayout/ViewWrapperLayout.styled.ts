import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  height: 100vh;
`;

export const Sidebar = styled.section`
  display: flex;
  width: 100%;
`;

export const ChildrenContainer = styled.div`
  margin-left: 19rem;
  width: 100vw;
`;

export const AsideContainer = styled.div`
  display: flex;
  background-color: #55af89;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: fixed;
  min-width: 19rem;
  max-width: 19rem;
  height: 100vh;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  background-color: transparent;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 300px;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  width: 17rem;
  height: 16rem;
`;

export const Logo = styled.img`
  width: 14rem;
  height: 12rem;
`;

export const AsideButton = styled.button`
  background-color: transparent;
  color: #fff;
  width: 17rem;
  height: 40px;
  font-weight: 600;

  :hover {
    opacity: 0.8;
    background-color: #fff;
    color: black;
    cursor: pointer;
  }
`;

export const ExitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 7rem;
  height: 50px;
  margin-top: 15rem;
  color: #fff;

  :hover {
    color: black;
  }
`;
