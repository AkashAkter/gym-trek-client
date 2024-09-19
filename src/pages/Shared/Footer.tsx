import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full container">
      <div className="w-full">
        <div className="py-14 grid grid-cols-12 gap-x-5 gap-y-8">
          <div className="col-span-full xl:col-span-3 relative footerBoxGradient rounded-2xl gap-12 p-6 xl:w-72 h-96 flex flex-col justify-center items-center ">
            <Link to="/" className="flex justify-center lg:justify-start">
              <span className="italic text-white font-[700] text-[25px]"></span>
            </Link>
          </div>

          <div className="block text-center xl:text-left xl:py-16 col-span-full min-[500px]:col-span-6 md:col-span-4 xl:col-span-3 xl:pl-5">
            <h4 className="text-lg  font-bold mb-9 text-primaryMat uppercase">
              Get In Touch
            </h4>
            <ul className="text-gray-900 transition-all duration-500 grid gap-6">
              <li>
                <a href="mailto:gymtrek@yahoo.com" className=" hover:underline">
                  gymtrek@yahoo.com
                </a>
              </li>
              <li>
                <a href="tel:+12345678901" className=" hover:underline">
                  +1 234 567 8901
                </a>
              </li>
              <li>Dhaka, Bangladesh</li>
            </ul>
          </div>
          <div className="block xl:py-16 col-span-full min-[500px]:col-span-6 md:col-span-4 xl:col-span-3">
            <h4 className="text-lg  font-bold mb-9 text-center xl:text-left text-primaryMat uppercase">
              Quick Links
            </h4>
            <div className="flex gap-6 xl:gap-12 max-xl:justify-center">
              <ul className="text-gray-600 hover:text-primaryTxt  transition-all duration-500 grid gap-6">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">FAQ</Link>
                </li>
                <li>
                  <Link to="/">Price Plan</Link>
                </li>
                <li>
                  <Link to="/">Features</Link>
                </li>
              </ul>
              <ul className="text-gray-600 transition-all duration-500 grid gap-6">
                <li>
                  <Link to="/">Careers</Link>
                </li>
                <li>
                  <Link to="/">About </Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>
                <li>
                  <Link to="/">Products</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="block xl:py-16 col-span-full md:col-span-4 xl:col-span-3">
            <h4 className="text-lg  font-bold mb-9 text-center xl:text-left text-primaryMat uppercase">
              Updates
            </h4>
            <div className="grid gap-7 ">
              <input
                type="email"
                name="email"
                className="py-2 px-4 border border-primaryMat shadow-sm h-14 text-lg  rounded w-full  xl:w-64 placeholder:text-primaryTxt/45 focus:outline-none"
                placeholder="EMAIL"
              />
              <button
                type="submit"
                className="flex gap-2 justify-center items-center py-3.5 px-7 rounded-full text-white bg-primaryMat shadow-md w-fit transition-all duration-500 mx-auto xl:mx-0 hover:bg-white hover:text-primaryMat font-bold uppercase"
              >
                Subscribe
                <svg
                  width="17"
                  height="13"
                  viewBox="0 0 17 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 6.88281L14.8333 6.88281M10.6667 11.8828L15.0774 7.47207C15.3552 7.19429 15.4941 7.0554 15.4941 6.88281C15.4941 6.71022 15.3552 6.57133 15.0774 6.29356L10.6667 1.88281"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex justify-around py-10">
        <div className="flex">
          <Link
            to="/"
            className="w-9 h-9 bg-white flex justify-center items-center hover:shadow-md text-primaryMat hover:text-white hover:bg-primaryMat"
          >
            <FaFacebook />
          </Link>
          <Link
            to={"/"}
            className="w-9 h-9 bg-white flex justify-center items-center hover:shadow-md text-primaryMat hover:text-white hover:bg-primaryMat"
          >
            <FaInstagram />
          </Link>
          <Link
            to="/"
            className="w-9 h-9 bg-white flex justify-center items-center hover:shadow-md text-primaryMat hover:text-white hover:bg-primaryMat"
          >
            <FaTwitter />
          </Link>
          <Link
            to="/"
            className="w-9 h-9 bg-white flex justify-center items-center hover:shadow-md text-primaryMat hover:text-white hover:bg-primaryMat"
          >
            <FaLinkedin />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <span className="text-sm text-gray-800 ">
            Copyright@2024 All Right Reserved by
            <Link to="/"> GYMTREK</Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
