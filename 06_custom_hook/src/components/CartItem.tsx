import type { Product } from "../data/products";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

interface ProductItem extends Product {
  quantity: number;
}

interface CartItemProps {
  item: ProductItem;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  const decrease = () => {
    if (item.quantity > 1) {
      onUpdateQuantity(item.id, item.quantity - 1);
    }
  };

  const increase = () => {
    onUpdateQuantity(item.id, item.quantity + 1);
  };

  return (
    <div className="cart-item">
      <div className="item-details">
        <h4>{item.name}</h4>
        <p>₹{item.price.toFixed(2)}</p>

        <div className="quantity-controls">
          <button onClick={decrease} disabled={item.quantity === 1}>
            <FaMinus />
          </button>

          <span>{item.quantity}</span>

          <button onClick={increase}>
            <FaPlus />
          </button>

          <button
            className="remove-btn"
            onClick={() => onRemove(item.id)}
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
