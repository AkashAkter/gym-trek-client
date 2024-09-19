"use client";
import { IProduct } from "../../types";
import { useAppDispatch } from "../../redux/hooks";
import { addItemToCart } from "../../redux/features/cart/cart.slice";

const ProductAddToCartBtn = ({ product }: { product: IProduct }) => {
  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    dispatch(addItemToCart(product));
  };
  return (
    <button
      className="center gap-[5px] rounded-[5px] w-[90%] mx-auto bg-primaryMat text-white font-bold py-2 prounded hover:bg-white hover:text-primaryMat hover:border hover:border-primaryMat group/cart overflow-hidden"
      onClick={handleAddToCart}
    >
      Add to Cart
    </button>
  );
};

export default ProductAddToCartBtn;
