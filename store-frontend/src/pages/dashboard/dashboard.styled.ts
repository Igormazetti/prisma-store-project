import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  width: 100vw;
  height: 100vh;

  h1 {
    margin: 4rem 19rem 0 0;
    height: 80px;
    text-shadow: 1px 1px #55af89;
    font-size: 26px;
  }
`;

export const SpanContainer = styled.span`
  margin: 2rem 19rem 0 0;
  height: 30px;
  text-align: center;
  font-size: 18px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #55af89;
  height: 200px;
  width: calc(100vw - 19rem);
`;
