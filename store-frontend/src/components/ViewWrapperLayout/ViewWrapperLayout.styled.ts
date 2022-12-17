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
  margin-left: 30rem;
  margin-top: 12rem;
`;

export const Header = styled.header`
  background: #242424;
  display: flex;
  flex-direction: row;
  border-bottom: 0.1rem solid rgba(165, 165, 165, 0.1);
  height: 7rem;
  text-align: left;
  position: absolute;
  width: 100%;

  h1 {
    margin-top: 5rem;
    margin-left: 40rem;
  }
`;

export const AsideButonsContainer = styled.div`
  display: flex;
  background-color: #242424;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3.2rem;
  overflow: hidden;
  position: fixed;
  min-width: 19rem;
  max-width: 19rem;
  height: 100vh;
`;

export const AsideButton = styled.button`
  background-color: #fff;
  color: #242424;
  width: 60px;
  height: 40px;

  :hover {
    cursor: pointer;
  }
`;
