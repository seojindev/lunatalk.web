import { Product } from './common';

export interface mainCategory {
  name: string;
  uuid: string;
  image: { fime_name: string; height: number; width: number; url: string };
}

export interface BestItem {
  uuid: string;
  product: Product;
}

export interface NewItem {
  uuid: string;
  product: Product;
}
