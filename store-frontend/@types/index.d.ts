import { string } from 'yup';

type User = {
  user: {
    id: number;
    name: string;
    email: string;
    password: string;
    companyId: number;
  };
  token: string;
};

type Product = {
  id: number;
  createdAt: string;
  updatedAt: string;
  title: string;
  quantity: number;
  value: number;
  companyId: number;
};
