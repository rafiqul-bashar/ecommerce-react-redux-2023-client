import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineDelete, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  clearCart,
  getTotals,
  removeFromCart,
  addToCart,
  decreaseCart,
} from "../redux/features/cart/cartSlice";
import { toast, Toaster } from "react-hot-toast";
const EmptyCart = () => {
  return (
    <div className=" w-screen bg-gray-100 text-center text-gray-800 py-12">
      <img
        className="h-0 w-28 mx-auto my-2"
        src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png"
      />
      <h2 className="tracking-tight text-4xl ">
        {" "}
        Your cart is currently empty
      </h2>
      <Link to="/products">
        <button className="px-8 py-2 rounded-md my-4 border-primary border-2 bg-primary font-semibold text-white tracking-wider cursor-pointer bg-slate-800 focus:border-white ">
          Return to shop
        </button>
      </Link>
    </div>
  );
};
export default function MyCartPage() {
  let user = !false;
  const dispatch = useDispatch();
  const { cartItems, cartTotalQuantity, cartTotalAmount } = useSelector(
    (state) => state.cart
  );

  React.useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);
  const handleQuantityChange = (type, id) => {
    if (type === 1) {
      dispatch(addToCart({ id }));
      toast.success("Items quantity increased.");
    }
    if (type === 0) {
      dispatch(decreaseCart({ id }));
      toast.error("Items quantity decreased.");
    }
  };
  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({ id }));
    toast.error("Item removed from cart.");
  };
  if (cartTotalQuantity === 0) return <EmptyCart />;
  return (
    <>
      {cartTotalQuantity !== 0 && (
        <div className=" text-gray-900 flex justify-center bg-gray-100">
          <div className="flex flex-col md:w-[60vw] p-6 space-y-4 sm:p-10  ">
            <h2 className="text-xl font-semibold">Your cart</h2>
            <ul className="flex flex-col divide-y divide-gray-700">
              {cartItems &&
                cartItems.map((item, i) => (
                  <li
                    key={i}
                    className="flex flex-col py-6 sm:flex-row sm:justify-between"
                  >
                    <div className="flex w-full space-x-2 sm:space-x-4">
                      <img
                        className="flex-shrink-0 object-contain w-20 h-20  border-transparent rounded outline-none sm:w-32 sm:h-32 "
                        src={item.image}
                        alt={item.title}
                      />
                      <div className="flex flex-col justify-between w-full pb-4">
                        <div className="flex justify-between w-full pb-2 space-x-2">
                          <div className="space-y-1">
                            <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                              {item.title}
                            </h3>
                            {/* <p className="text-sm  text-gray-400">Classic</p> */}
                          </div>
                          <div className="flex items-center space-x-8">
                            <p className="text-lg font-semibold">
                              {item.price}$
                            </p>
                            <p className="text-lg font-semibold">X</p>
                            <p className="text-lg font-semibold">
                              {item.cartQuantity}
                            </p>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <AiOutlineMinus
                              onClick={() => handleQuantityChange(0, item?.id)}
                              className="h-6 w-6"
                            />
                            <span className="mx-2 ">{item.cartQuantity}</span>
                            <AiOutlinePlus
                              onClick={() => handleQuantityChange(1, item?.id)}
                              className="h-6 w-6"
                            />
                            <div className="flex text-sm divide-x">
                              <button
                                onClick={() => handleRemoveFromCart(item.id)}
                                type="button"
                                className="flex items-center px-2 py-1 pl-0 space-x-1"
                              >
                                <AiOutlineDelete className="text-red-500 h-6 w-6" />
                                <span>Remove</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
            <div className="space-y-1 text-right">
              <p>
                Total amount:
                <span className="font-semibold">{cartTotalAmount} $</span>
              </p>
              <p className="text-sm  text-gray-400">
                Not including taxes and shipping costs
              </p>
              <button
                onClick={() => dispatch(clearCart())}
                type="button"
                className="px-4 py-1 bg-red-400 text-white rounded-sm font-semibold"
              >
                Clear Cart
              </button>
            </div>
            <div className="flex justify-end space-x-4">
              <Link to="/products">
                <h2 className="px-6 py-2 rounded-md my-4 border-primary border-2 bg-primary font-semibold text-slate-800 tracking-wider cursor-pointer border-slate-800 ">
                  Return to shop
                </h2>
              </Link>

              <Link
                to={user ? "/checkout" : "/login"}
                className="px-6 py-2 rounded-md my-4 border-primary border-2 bg-primary font-semibold text-white tracking-wider cursor-pointer bg-slate-800 focus:border-white "
              >
                Proceed To Payment
              </Link>
            </div>
          </div>
          <Toaster position="bottom-right" />
        </div>
      )}
    </>
  );
}
