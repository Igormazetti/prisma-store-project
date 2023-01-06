import axios from 'axios';

export async function getCompany(id: number): Promise<User> {
  const url = `http://localhost:6060/company/${id}`;

  const request = await axios.get(url);

  const { data } = request;

  return data;
}
