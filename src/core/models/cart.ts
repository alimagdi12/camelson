export interface CartItem {
  id: string;
  name: string;
  description: string;
  color: string;
  size: string;
  price: number;
  quantity: number;
  image: string;
}

export interface CartCardProps {
  items?: CartItem[];
  onQuantityChange?: (id: string, quantity: number) => void;
  onRemoveItem?: (id: string) => void;
}
