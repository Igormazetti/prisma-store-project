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
import Pagination from 'components/Pagination';
import { paginate } from 'service/paginate';

export default function Produtos() {
  const [products, setProducts] = useState<Product[]>();
  const [productsBk, setProductsBk] = useState<Product[]>();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  useEffect(() => {
    const getAllProducts = async () => {
      const company = JSON.parse(localStorage.getItem('companyData') as string);
      const data = await getProducts(company.id);
      setProducts(paginate(data, currentPage, pageSize));
      setProductsBk(data);
    };

    getAllProducts();
  }, []);

  useEffect(() => {
    setProducts(paginate(productsBk, currentPage, pageSize));
  }, [currentPage]);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <ViewWrapperLayout>
      <MainContainer>
        <Header />
        <SearchContainer>
          <SearchInput placeholder="Busque pelo nome ou apelido" />
          <IconButton>
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
        <Pagination
          items={productsBk?.length} // 100
          currentPage={currentPage} // 1
          pageSize={pageSize} // 10
          onPageChange={onPageChange}
        />
      </MainContainer>
    </ViewWrapperLayout>
  );
}
