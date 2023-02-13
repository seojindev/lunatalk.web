import { Product as commonProduct } from './common';

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
  originalPrice: string;
  numberPrice: number;
  price: string;
  quantity: number;
  reviews: any[];
  option: {
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
    rep: {
      url: string[];
    };
    detail: {
      url: string[];
    };
  };
}
