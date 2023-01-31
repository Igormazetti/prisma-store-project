import axios from 'axios';
import { Company } from '@types';

export async function getCompany(id: number): Promise<Company> {
  const url = `http://localhost:6060/company/${id}`;

  const request = await axios.get(url);

  const { data } = request;

  return data;
}
