import axios from 'axios';
import { BACKEND_URL } from '../constants';

export async function getCompany(id: number): Promise<User> {
  const url = `${BACKEND_URL}/company/${id}`;

  const request = await axios.get(url);

  const { data } = request;

  return data;
}
