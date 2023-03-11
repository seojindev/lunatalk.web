import { Image, Product as commonProduct } from './common';
export interface Error {
  error_message?: string;
}

export interface ResponseInterface<T> extends Error {
  message: string;
  result: T;
}

export interface MainCategory {
  name: string;
  uuid: string;
  image: { fime_name: string; height: number; width: number; url: string };
}

export interface BestItem {
  uuid: string;
  product: commonProduct;
}

export interface NewItem {
  uuid: string;
  product: commonProduct;
}

export interface Notice {
  category: {
    code_id: number;
    code_name: string;
  };
  created_at: string;
  title: string;
  uuid: string;
}

export interface CategoryList {
  uuid: string;
  products: commonProduct[];
}

export interface Product {
  uuid: string;
  name: string;
  original_price: {
    number: number;
    string: string;
  };
  price: {
    number: number;
    string: string;
  };
  quantity: number;
  reviews: any[];
  options: {
    color: {
      id: number;
      name: string;
    }[];
    wireless: {
      id: number;
      name: string;
    }[];
  };
  image: {
    rep: Image[];
    detail: Image[];
  };
}

export interface Login {
  access_token: string;
  refresh_token: string;
}

export interface PhoneAuth {
  uuid: string;
  phone_number: string | null;
  auth_index: number;
}

export interface PhoneAuthConfirm {
  phone_number: string | null;
  auth_index: number;
}

export interface RegisterRequest {
  authIndex: number;
  userId: string;
  userPassword: string;
  userPasswordConfirm: string;
  userName: string;
  userEmail: string;
  userEmailAddress: string;
  userSelectEmail: boolean;
  userSelectMessage: boolean;
}

export interface Register {
  id: number;
  uuid: string;
  login_id: string;
  name: string;
  type: string;
  level: string;
  status: string;
}

export interface NoticeDetail {
  category: {
    code_id: number;
    code_name: string;
  };
  content: string;
  created_at: { type1: string; type2: string };
  id: number;
  image: any[];
  title: string;
  uuid: string;
}
