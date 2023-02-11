export interface CodeItem {
  code_id: string;
  code_name: string;
}

export interface Codes {
  code_name: { [key: string]: string };
  code_group: {
    [key: string]: CodeItem[];
  };
}
export interface Categories {
  uuid: string;
  name: string;
}

export interface AppBase {
  codes: Codes;
  product_category: Categories[];
}

export interface Product {
  badge: string[];
  color: {
    id: number;
    name: string;
  }[];
  name: string;
  original_price: {
    number: number;
    string: string;
  };
  price: {
    number: number;
    string: string;
  };
  rep_image: {
    file_name: string;
    url: string;
  };
  review_count: {
    number: number;
    string: string;
  };
  uuid: string;
}

export interface ProductList {
  name: string;
  items: Product[];
}
