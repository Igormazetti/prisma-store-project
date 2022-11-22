import axios from 'axios';

export async function login(email: string, password: string): Promise<User> {
  const url = 'http://localhost:6060/user/login';
  const request = axios
    .post(url, {
      email,
      password,
    })
    .then((result) => {
      console.log(result.data);
      return result.data;
    })
    .catch((e) => console.log(e));

  console.log(request);

  return request;
}
