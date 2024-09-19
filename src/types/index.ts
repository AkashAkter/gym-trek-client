
export interface ICategory {
  label: string;
  img: string;
  value: string;
}
export interface IProduct {
  image: string;
  title: string;
  price: number;
  stock: number;
  details: string;
  category: string;
  _id: string;
  tag?: string;
}
