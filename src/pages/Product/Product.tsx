import { useEffect } from "react";
import ProductsView from "../../view/ProductsView";

const Product = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return <ProductsView />;
};

export default Product;
