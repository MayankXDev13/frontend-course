import type { Product } from "../data/products";
import CartItem from "./CartItem";

interface CartProps {
  cart: Product[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
  total: number;
}

function Cart({ cart, onUpdateQuantity, onRemove, total }: CartProps) {
  if (cart.length === 0) {
    return <div className="cart empty">Your cart is empty</div>;
  }

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>

      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onUpdateQuantity={onUpdateQuantity}
          onRemove={onRemove}
        />
      ))}

      <div className="cart-total">
        <h3>Total: ₹{total.toFixed(2)}</h3>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
