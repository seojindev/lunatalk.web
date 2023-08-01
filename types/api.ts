import { Image, Option, Price, Product as commonProduct } from './common';
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
  original_price: Price;
  price: Price;
  quantity: number;
  reviews: any[];
  options: {
    color: Option[];
    wireless: Option[];
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

export interface Cart {
  cart_id: number;
  color: Option[];
  name: string;
  price: Price;
  product_uuid: string;
  rep_image: Image;
}

export interface MyOrderInformation {
  address: {
    zipcode: string;
    step1: string;
    step2: string;
  };
  email: {
    full_email: string;
    gubun1: {
      step1: string;
      step2: string;
    };
    gubun2: {
      step1: string;
      step2: string;
    };
  };
  name: string;
  phone_number: {
    step1: string;
    step2: string;
    step3: string;
  };
}

export interface MyPageUserInformation {
  id: number;
  uuid: string;
  name: string;
}

export interface OrderState {
  price_before: string;
  delivery_brfore: string; //backend 오타.
  delivery_ing: string;
  delivery_end: string;
}

export interface OrderProduct {
  uuid: string;
  order_name: string;
  order_price: Price;
  created_at: {
    type1: string;
    type2: string;
    type3: string;
  };
  rep_image: Image;
  state: {
    code_id: string;
    code_name: string;
  };
}

export interface MyPage {
  user_info: MyPageUserInformation;
  order_state: OrderState;
  list: {
    order: OrderProduct[];
    cancel: OrderProduct[];
  };
}
