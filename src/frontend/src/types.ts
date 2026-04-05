export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice: number | null;
  image: string;
  rating: number;
  reviews: number;
  badge: string | null;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
