import axios from 'axios';
import { BACKEND_URL } from '../constants';

export async function login(email: string, password: string): Promise<User> {
  const url = `${BACKEND_URL}/user/login`;

  const request = await axios.post(url, {
    email,
    password,
  });

  const { data } = request;

  return data;
}
