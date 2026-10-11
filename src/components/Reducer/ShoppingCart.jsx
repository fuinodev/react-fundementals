
import { useReducer } from "react";
import { Plus, Minus, Trash2, ShoppingCart as CartIcon } from "lucide-react";

const initialState = [
  { id: 1, name: "Keyboard", price: 1500, quantity: 1 },
  { id: 2, name: "Mouse", price: 750, quantity: 2 },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      // TODO: Add a product or increase its quantity
      return state;

    case "increase":
      // TODO: Increase the matching product quantity
      return state;

    case "decrease":
      // TODO: Decrease quantity; remove when it reaches zero
      return state;

    case "remove":
      // TODO: Remove the matching product
      return state;

    case "clear":
      // TODO: Return an empty array
      return state;

    default:
      return state;
  }
};

const ShoppingCart = () => {
  const [cart, dispatch] = useReducer(reducer, initialState);

  const total = cart.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  return (
    <div>
      <h1><CartIcon size={24} /> Shopping Cart</h1>

      {cart.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>₱{product.price}</p>
          <p>Quantity: {product.quantity}</p>

          <button
            onClick={() => dispatch({
              type: "decrease",
              id: product.id
            })}
            aria-label={`Decrease ${product.name}`}
          >
            <Minus size={20} />
          </button>

          <button
            onClick={() => dispatch({
              type: "increase",
              id: product.id
            })}
            aria-label={`Increase ${product.name}`}
          >
            <Plus size={20} />
          </button>

          <button
            onClick={() => dispatch({
              type: "remove",
              id: product.id
            })}
            aria-label={`Remove ${product.name}`}
          >
            <Trash2 size={20} />
          </button>
        </div>
      ))}

      <h2>Total: ₱{total}</h2>

      <button onClick={() => dispatch({ type: "clear" })}>
        Clear Cart
      </button>
    </div>
  );
};

export default ShoppingCart;
