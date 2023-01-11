import { useState, useEffect } from 'react';
import ViewWrapperLayout from 'components/ViewWrapperLayout';
import {
  MainContainer,
  SearchContainer,
  IconButton,
  SearchInput,
  ProductsContainer,
} from './produtos.styles';
import Header from 'components/Header';
import { getProducts } from 'service/products';
import { Product } from '@types';
import { GoSearch } from 'react-icons/go';
import ProductCard from 'components/ProductCard';
import { selectCompanyState } from 'redux/store/companySlice';
import { useSelector } from 'react-redux';

export default function Produtos() {
  const [products, setProducts] = useState<Product[]>();
  const { id } = useSelector(selectCompanyState);

  useEffect(() => {
    const getAllProducts = async () => {
      const data = await getProducts(id);
      setProducts(data);
    };

    getAllProducts();
  }, []);

  const teste = () => console.log(products);

  return (
    <ViewWrapperLayout>
      <MainContainer>
        <Header />
        <SearchContainer>
          <SearchInput placeholder="Busque pelo nome ou apelido" />
          <IconButton onClick={teste}>
            <GoSearch size={28} />
          </IconButton>
        </SearchContainer>
        <ProductsContainer>
          {products !== undefined ? (
            products.map((item: Product) => <ProductCard data={item} />)
          ) : (
            <span>Não há produtos cadastrados</span>
          )}
        </ProductsContainer>
      </MainContainer>
    </ViewWrapperLayout>
  );
}
