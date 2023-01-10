import { useState, useEffect } from 'react';
import ViewWrapperLayout from '../../components/ViewWrapperLayout';
import { Input } from '@chakra-ui/react';
import { MainContainer, SearchContainer, IconButton } from './produtos.styled';
import Header from 'components/Header';
import { getProducts } from 'service/products';
import { Product } from '../../../@types';
import { GoSearch } from 'react-icons/go';

export default function Produtos() {
  const [products, setProducts] = useState<Product[]>();
  const [backupProducts, setBackupProducts] = useState<Product[]>();

  useEffect(() => {
    const getAllProducts = async () => {
      const data = await getProducts();
      setProducts(data);
      setBackupProducts(data);
    };

    getAllProducts();
  }, []);

  return (
    <ViewWrapperLayout>
      <MainContainer>
        <Header />
        <SearchContainer>
          <Input
            w="400px"
            _placeholder={{ opacity: 1, color: '#969b9b' }}
            focusBorderColor="#5b5f5f"
            placeholder="Busque pelo nome ou apelido"
          />
          <IconButton>
            <GoSearch size={28} />
          </IconButton>
        </SearchContainer>
      </MainContainer>
    </ViewWrapperLayout>
  );
}
