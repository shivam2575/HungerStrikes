import { useDispatch, useSelector } from "react-redux";
import ResMenuItemList from "./ResMenuItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  console.log(cartItems);
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold m-4 p-4 text-3xl">Cart</h1>
      <div className="flex justify-center items-center flex-col w-6/12 h-full">
        {cartItems.length === 0 ? (
          <h1>Your cart is empty...!!!</h1>
        ) : (
          <ResMenuItemList data={cartItems} />
        )}
        <button
          type="submit"
          className="w-4/12 m-4 p-2 rounded-lg bg-amber-500 cursor-pointer"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
