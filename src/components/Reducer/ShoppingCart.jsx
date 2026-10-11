
import { useReducer } from "react";
import {
  Plus,
  Minus,
  Trash2,
  ShoppingCart as CartIcon,
  RotateCcw,
} from "lucide-react";

import "./ShoppingCart.css";

const products = [
  { id: 1, name: "Keyboard", price: 1500 },
  { id: 2, name: "Mouse", price: 750 },
  { id: 3, name: "Headset", price: 1200 },
];

const initialState = [
  { id: 1, name: "Keyboard", price: 1500, quantity: 1 },
  { id: 2, name: "Mouse", price: 750, quantity: 2 },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "add": {
      const existingProduct = state.find(
        (product) => product.id === action.product.id
      );

      if (existingProduct) {
        return state.map((product) =>
          product.id === action.product.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      }

      return [
        ...state,
        { ...action.product, quantity: 1 },
      ];
    }

    case "increase":
      return state.map((product) =>
        product.id === action.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );

    case "decrease":
      return state
        .map((product) =>
          product.id === action.id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0);

    case "remove":
      return state.filter(
        (product) => product.id !== action.id
      );

    case "clear":
      return [];

    default:
      return state;
  }
};

const ShoppingCart = () => {
  const [cart, dispatch] = useReducer(reducer, initialState);

  const total = cart.reduce(
    (sum, product) =>
      sum + product.price * product.quantity,
    0
  );

  const totalItems = cart.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h1 className="cart-title">
        <CartIcon size={28} />
        Shopping Cart
      </h1>

      <h2>Available Products</h2>

      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div>
              <h3>{product.name}</h3>
              <p>₱{product.price.toLocaleString()}</p>
            </div>

            <button
              className="add-btn"
              onClick={() =>
                dispatch({
                  type: "add",
                  product,
                })
              }
              aria-label={`Add ${product.name} to cart`}
            >
              <Plus size={20} />
              Add
            </button>
          </div>
        ))}
      </div>

      <h2>Your Cart ({totalItems})</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">
          Your shopping cart is empty.
        </p>
      ) : (
        <div className="cart-list">
          {cart.map((product) => (
            <div className="cart-item" key={product.id}>
              <div className="cart-info">
                <h3>{product.name}</h3>
                <p>
                  ₱{product.price.toLocaleString()} each
                </p>
                <p>
                  Subtotal: ₱
                  {(product.price * product.quantity)
                    .toLocaleString()}
                </p>
              </div>

              <div className="cart-actions">
                <button
                  className="quantity-btn"
                  onClick={() =>
                    dispatch({
                      type: "decrease",
                      id: product.id,
                    })
                  }
                  aria-label={`Decrease ${product.name}`}
                >
                  <Minus size={18} />
                </button>

                <span className="quantity">
                  {product.quantity}
                </span>

                <button
                  className="quantity-btn"
                  onClick={() =>
                    dispatch({
                      type: "increase",
                      id: product.id,
                    })
                  }
                  aria-label={`Increase ${product.name}`}
                >
                  <Plus size={18} />
                </button>

                <button
                  className="remove-btn"
                  onClick={() =>
                    dispatch({
                      type: "remove",
                      id: product.id,
                    })
                  }
                  aria-label={`Remove ${product.name}`}
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="cart-footer">
        <h2>
          Total: ₱{total.toLocaleString()}
        </h2>

        <button
          className="clear-btn"
          onClick={() => dispatch({ type: "clear" })}
          disabled={cart.length === 0}
        >
          <RotateCcw size={18} />
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
