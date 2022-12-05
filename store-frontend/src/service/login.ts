import axios from 'axios';

export async function login(email: string, password: string): Promise<User> {
  const url = 'http://localhost:6060/user/login';

  const request = await axios.post(url, {
    email,
    password,
  });

  const { data } = request;

  return data;
}
