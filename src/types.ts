export type Indexable = {
  id: number;
};

export type Entity = Indexable & {
  createdAt: Date;
};

export type Product = Entity & {
  name: string;
  description: string;
  price: number;
  image: string;
};

export type User = Indexable & {
  name: string;
  email: string;
  password: string;
  role: string;
  coins: number;
};

export type ErrCode = {
  errCode: number;
  message: string;
};

export type Login = {
  email: string;
  password: string;
};
