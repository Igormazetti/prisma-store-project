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

type Company = {
  id: number;
  name: string;
};

type Product = {
  id: number;
  createdAt: string;
  updatedAt: string;
  title: string;
  quantity: number;
  value: number;
  imgUrl?: string;
  companyId: number;
  subtitle?: string;
};
