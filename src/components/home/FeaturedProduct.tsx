import { Link } from "react-router-dom";
import ProductCard from "../product/ProductCard";
import SectionHeading from "../ui/sectionHeading";
import Loader from "../../utils/Loader";
import { useGetFeaturedProductsQuery } from "../../redux/features/product/product.api";

const FeaturedProduct = () => {
  const { data, isLoading } = useGetFeaturedProductsQuery(undefined);
  // console.log(data);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <section className="my-32">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">BEST SELLING PRODUCT</h1>
        <Link
          to={"/product"}
          className="font-semibold py-2 px-4 border-b-2 border-primaryMat text-black hover:text-primaryMat  hover:border-primaryMat mt-0 uppercase"
        >
          see all
        </Link>
      </div>

      <SectionHeading text="" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.data?.map((data: any, i: any) => (
          <ProductCard key={"product" + i} product={data} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProduct;
