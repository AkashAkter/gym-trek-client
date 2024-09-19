import { Link } from "react-router-dom";

const ProductBenefit = () => {
  return (
    <section className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
        <div className="flex flex-col h-full">
          <Link to={"/product"} className="mb-4 overflow-hidden">
            <div className="transition-transform transform duration-700 ease-in-out hover:scale-105">
              <img
                src="https://demo1.leotheme.com/bos_gymgear_demo/themes/bos_gymgear/assets/img/modules/appagebuilder/images/banner_1_h1.jpg"
                alt="Banner 1"
                className="w-full rounded-md h-full object-cover"
              />
            </div>
          </Link>
          <Link to={"/product"} className="mt-4 overflow-hidden">
            <div className="transition-transform transform duration-700 ease-in-out hover:scale-105">
              <img
                src="https://demo1.leotheme.com/bos_gymgear_demo/themes/bos_gymgear/assets/img/modules/appagebuilder/images/banner_2_h1.jpg"
                alt="Banner 2"
                className="w-full rounded-md h-full object-cover"
              />
            </div>
          </Link>
        </div>

        <div className="flex overflow-hidden">
          <Link to={"/product"} className="w-full">
            <div className="transition-transform transform duration-700 ease-in-out hover:scale-105">
              <img
                src="https://demo1.leotheme.com/bos_gymgear_demo/themes/bos_gymgear/assets/img/modules/appagebuilder/images/banner_3_h1.jpg"
                alt="Banner 3"
                className="w-full h-auto rounded-md object-cover"
              />
            </div>
          </Link>
        </div>
      </div>

      <div
        className="relative w-full h-[400px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://demo1.leotheme.com/bos_gymgear_demo/themes/bos_gymgear/assets/img/modules/leoslideshow/slide_2.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        {/* Optional overlay for better text contrast */}
        <div className="absolute inset-0 flex items-center justify-start px-6 lg:px-12">
          <div className="text-white max-w-lg text-justify">
            <p className="text-3xl lg:text-2xl uppercase font-bold mb-4">
              Transform Your Health: Why{" "}
              <span className="text-primaryMat">Quality Fitness Equipment</span>{" "}
              is Essential.
            </p>
            <p className="mb-4">
              Investing in fitness equipment boosts your workout efficiency,
              allowing targeted training. It encourages a healthier lifestyle
              and improves overall physical performance.
            </p>
          </div>
        </div>
      </div>

      <div
        className="relative w-full h-[400px] bg-cover bg-center my-16"
        style={{
          backgroundImage:
            "url('https://www.fitnessavenue.ca/cdn/shop/files/Benches_homepage.webp?v=1719609064&width=640')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        {/* Darker overlay for better text contrast */}
        <div className="absolute inset-0 flex items-center justify-end px-6 lg:px-12">
          <div className="text-white max-w-lg text-right text-justify">
            <p className="text-3xl lg:text-2xl uppercase font-bold">
              Elevate Your Workout: The Essential Role of{" "}
              <span className="text-primaryMat">Fitness Equipment</span>{" "}
            </p>
            <p className="my-4"></p>
            <p className="">
              Quality fitness equipment enhances exercise variety, ensuring
              effective training. It supports injury prevention and helps
              maintain motivation for consistent workouts.
            </p>
          </div>
        </div>
      </div>

      <div
        className="relative w-full h-[400px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.fitnessavenue.ca/cdn/shop/files/Power-racks_homepage.webp?v=1719609064&width=640')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        {/* Darker overlay for better text contrast */}
        <div className="absolute inset-0 flex items-center justify-start px-6 lg:px-12">
          <div className="text-white max-w-lg text-justify">
            <p className="text-3xl lg:text-2xl uppercase font-bold">
              Unlock Your Potential: The Benefits of Investing in{" "}
              <span className="text-primaryMat">Quality Fitness Equipment</span>{" "}
            </p>
            <p className="my-4"></p>
            <p className="">
              Fitness equipment enhances strength, endurance, and flexibility,
              supporting overall health. It promotes consistency and motivation
              in achieving your fitness goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductBenefit;
