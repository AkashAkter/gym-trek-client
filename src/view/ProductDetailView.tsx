import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import SectionHeading from "../components/ui/sectionHeading";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { addItemToCart } from "../redux/features/cart/cart.slice";
import { useGetProductByIdQuery } from "../redux/features/product/product.api";
import { useAppDispatch } from "../redux/hooks";
import { IProduct } from "../types";
import { useState } from "react";
import { FaBox } from "react-icons/fa";
import { TbShoppingCartOff } from "react-icons/tb";
import { useParams } from "react-router-dom";

const ProductDetailView = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetProductByIdQuery(id as string);
  const [quantity, setQuantity] = useState(1);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const stock = data?.data.stock || 0;

  const handleAddToCart = () => {
    const product = data?.data as IProduct;
    dispatch(addItemToCart({ ...product, quantity }));
  };

  return (
    <div className="container min-h-screen">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mx-auto py-8 md:py-12">
        <div className="grid gap-6">
          <img
            src={data?.data?.image}
            alt="Product Image"
            className="w-full h-full object-cover border rounded-lg overflow-hidden"
          />
        </div>
        <div className="grid gap-6">
          <h1 className="text-3xl font-bold">{data?.data.title}</h1>
          <p className="text-[30px] font-[700] text-primaryTxt">
            ${data?.data?.price}
          </p>
          {stock ? (
            <span className="bg-primaryMat text-white w-fit px-[8px] py-[4px] rounded-[4px] flex items-center gap-[5px]">
              <FaBox /> {stock} Item in stock
            </span>
          ) : (
            <span className="bg-[#ff6d6d] text-white w-fit px-[8px] py-[4px] rounded-[4px] flex items-center gap-[5px]">
              <TbShoppingCartOff /> Stock Out
            </span>
          )}
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="quantity" className="text-base">
                Quantity
              </Label>
              <Select
                defaultValue="1"
                onValueChange={(e) => setQuantity(Number(e))}
              >
                <SelectTrigger className="w-24">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5].map(
                    (val) =>
                      val <= stock && (
                        <SelectItem key={val} value={val.toString()}>
                          {val}
                        </SelectItem>
                      )
                  )}
                </SelectContent>
              </Select>
            </div>
            <Button
              onClick={handleAddToCart}
              className="w-full bg-primaryMat text-white disabled:cursor-not-allowed"
              disabled={!stock}
            >
              Add to cart
            </Button>
          </div>
        </div>
      </div>

      <div>
        <SectionHeading text="Product Description" className="!mb-[10px]" />
        <p>{data?.data?.details}</p>
      </div>

      {/* Additional Product Details Section */}
      <div className="mt-8">
        <SectionHeading text="Additional Details" className="!mb-[10px]" />
        <ul className="list-disc ml-5">
          <li>
            <strong>Category:</strong> {data?.data?.category}
          </li>
          <li>
            <strong>Brand:</strong> N/A
          </li>
          <li>
            <strong>Dimensions:</strong> N/A
          </li>
          <li>
            <strong>Weight:</strong> N/A
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetailView;
