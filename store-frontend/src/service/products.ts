import axios from 'axios';
import { Product } from '@types';

export async function getProducts(): Promise<Product[]> {
  const url = `http://localhost:6060/products`;

  const request = await axios.get(url);

  const { data } = request;

  return data;
}
