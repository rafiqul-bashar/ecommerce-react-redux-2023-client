import React from "react";
import { useParams } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { addToCart } from "../redux/features/cart/cartSlice";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import Loading from "../components/ui/Loading";
import { useGetSingleProductQuery } from "../redux/features/product/productApi";
export default function SIngleProductPage() {
  const [quantity, setQuantity] = React.useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data: product, isLoading, isError } = useGetSingleProductQuery(id);
  const {
    id: productId,
    title,
    price,
    category,
    image,
    description,
  } = product || {};
  const handleQuantity = (type) => {
    if (type === 0) {
      if (quantity === 1) return;
      setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  const handleAddtoCart = () => {
    dispatch(
      addToCart({ id: productId, title, image, price, cartQuantity: quantity })
    );
    toast.success("Product Added To Cart Successfully.");
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="bg-zinc-100 select-none">
      <div className="py-24 max-w-4xl mx-auto px-4 md:px-0 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="col-span-1">
            <img src={image} alt={title} className="h-[320px] mx-auto" />
          </div>
          <div className="col-span-2 px-3 mt-10 md:mt-0">
            <div className="flex flex-col gap-4">
              <p className="text-5xl md:text-7xl font-semibold text-gray-700">
                $ {price}
              </p>
              <h4 className="capitalize tracking-wide text-sm md:text-base bg-gray-700 text-zinc-50 p-1 w-fit">
                {category}
              </h4>
              <h1 className="select-text capitalize tracking-wide text-gray-800 text-xl md:text-3xl hover:underline duration-100">
                {title}
              </h1>
              <p className="text-lg">{description}</p>
              {/* buttons annd etc */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <AiOutlineMinus
                    onClick={() => handleQuantity(0)}
                    className="h-6 w-6"
                  />
                  <span className="mx-2 ">{quantity}</span>
                  <AiOutlinePlus
                    onClick={() => handleQuantity(1)}
                    className="h-6 w-6"
                  />
                </div>
                <button
                  disabled={isLoading}
                  onClick={handleAddtoCart}
                  className="bg-gray-800 text-zinc-50 font-semibold px-8 py-2 flex items-center space-x-4 "
                >
                  <BsCartPlus className="h-6 w-6" />{" "}
                  <span className="inline-block"> Add To Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
}
