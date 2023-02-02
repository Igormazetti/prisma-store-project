import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 7px;
  height: 35px;
  margin: 30px 0 10px;
`;

export const Ul = styled.div`
  display: flex;
  gap: 10px;
  margin-right: 19rem;
  .active-page {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    border: 1px solid #eaeaea;
    border-radius: 0.5rem;
    cursor: pointer;
    background-color: red;
  }

  .inactive-page {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    border: 1px solid #eaeaea;
    border-radius: 0.5rem;
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const Li = styled.div``;

export const PageLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  cursor: pointer;
`;
