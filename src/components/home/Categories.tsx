import { Link } from "react-router-dom";
import { categories } from "../../mock/categories";
import SectionHeading from "../ui/sectionHeading";
import { ICategory } from "../../types";

const Categories = () => {
  return (
    <section className="mt-[50px] w-full">
      <SectionHeading text="" />
      <h1 className="text-2xl font-bold mb-6">
        EQUIPMENT MADE FOR YOUR LIFESTYLE
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((data, i) => (
          <CategoryCard data={data} key={i + "string"} />
        ))}
      </div>
    </section>
  );
};

const CategoryCard = ({ data }: { data: ICategory }) => {
  const { img, label } = data;

  return (
    <Link to={`/product?category=${data.value}`} className="block">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow h-full transition-transform transform hover:scale-105">
        <a href="#" className="block">
          <img
            className="rounded-t-lg h-52 w-full object-cover transition-transform transform"
            src={img}
            alt={label}
          />
        </a>
        <div className="p-5 text-center">
          <h3 className="text-xl tracking-tight text-gray-900 relative group">
            {label}
            <span className="absolute left-0 bottom-0 h-1 bg-primaryMat w-full transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default Categories;
