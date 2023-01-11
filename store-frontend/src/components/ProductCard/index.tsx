import { Product } from '@types';
import React from 'react';
import { CardContainer, CardImage, CardText } from './ProductCard.styles';

type Props = {
  data: Product;
};

export default function ProductCard({ data }: Props) {
  return (
    <CardContainer key={data.id}>
      <CardImage src={data?.imgUrl} alt="produto sem imagem" />
      <CardText>{data.title}</CardText>
      <CardText>{data.subtitle}</CardText>
      <CardText className="estoque">
        Quantidade em estoque: {data.quantity}
      </CardText>
      <CardText>
        <strong>R$ {data.value}</strong>
      </CardText>
    </CardContainer>
  );
}
