export interface CodeItem {
  code_id: string;
  code_name: string;
}

export interface Codes {
  code_name: any;
  code_group: {
    '110': CodeItem[];
    '120': CodeItem[];
    '130': CodeItem[];
    '210': CodeItem[];
    '300': CodeItem[];
    '400': CodeItem[];
    '010': CodeItem[];
  };
}
export interface Categories {
  uuid: string;
  name: string;
}

export interface AppBase {
  codes: Codes[];
  product_category: Categories[];
}
