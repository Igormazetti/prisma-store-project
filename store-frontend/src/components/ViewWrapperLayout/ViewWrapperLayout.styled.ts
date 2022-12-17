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
  background-color: #242424;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  overflow: hidden;
  position: fixed;
  min-width: 19rem;
  max-width: 19rem;
  height: 100vh;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  background-color: #242424;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 300px;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #242424;
  justify-content: center;
  align-items: center;
  width: 17rem;
  height: 16rem;
`;

export const Logo = styled.img`
  width: 17rem;
  height: 16rem;
`;

export const AsideButton = styled.button`
  background-color: #fff;
  color: #242424;
  width: 17rem;
  height: 40px;
  font-weight: 600;

  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
