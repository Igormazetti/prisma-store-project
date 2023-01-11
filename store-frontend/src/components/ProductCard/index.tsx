import { Product } from '@types';
import React from 'react';

type Props = {
  data: Product;
};

export default function ProductCard({ data }: Props) {
  return (
    <div key={data.id}>
      <img src={data?.imgUrl} alt="produto sem imagem" />
      <span>{data.title}</span>
      <span>{data.subtitle}</span>
      <span>Quantidade em estoque: {data.quantity}</span> <br />
      <span>
        <strong>R$ {data.value}</strong>
      </span>
    </div>
  );
}
