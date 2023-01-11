import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  height: 100px;
  margin-right: 19rem;
  margin-bottom: 30px;
`;

export const SearchInput = styled.input`
  width: 450px;
  height: 50px;
  outline: 2px solid #878d8d;
  outline-offset: 2px;
  position: relative;
  border-radius: 25px;
  font-size: 18px;
  padding: 0 10px;

  ::placeholder {
    opacity: 1;
    color: #969b9b;
  }

  :focus {
    outline: 2px solid black;
  }
`;

export const IconButton = styled.button`
  height: 50px;
  margin-left: -37px;
  z-index: 2;
  background-color: transparent;
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: 300px 300px 300px;
  gap: 50px;
  justify-content: center;
  margin-left: -19rem;
`;
