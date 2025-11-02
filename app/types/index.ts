export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  badge?: string;
  image?: string;
}

export interface CartItem extends Product {
  quantity: number;
}
