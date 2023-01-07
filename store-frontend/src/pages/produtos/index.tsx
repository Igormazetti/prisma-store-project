import React from 'react';
import ViewWrapperLayout from '../../components/ViewWrapperLayout';
import { Input } from '@chakra-ui/react';
import { MainContainer, HeaderContainer } from './produtos.styled';

export default function Produtos() {
  return (
    <ViewWrapperLayout>
      <MainContainer>
        <HeaderContainer>
          <Input
            w="400px"
            _placeholder={{ opacity: 1, color: '#FFF' }}
            focusBorderColor="#5b5f5f"
            placeholder="Busque pelo nome"
          />
          <button>Icon</button>
        </HeaderContainer>
      </MainContainer>
    </ViewWrapperLayout>
  );
}
