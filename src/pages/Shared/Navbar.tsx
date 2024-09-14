import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import { Link } from "react-router-dom";
import "../../styles/style.css";

const Navbar = () => {
  const NavbarMenu = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "Product",
      link: "/product",
    },
    {
      id: 3,
      title: "Product Management",
      link: "/manage-product",
    },
    {
      id: 4,
      title: "About Us",
      link: "/aboutus",
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className=" max-w-screen-xl mx-auto hidden md:block py-8">
        <div className="flex justify-between">
          <Link to={"/"}>
            <h1
              className="hidden md:block font-extrabold text-3xl"
              style={{ fontFamily: "Playwrite CU, cursive" }}
            >
              <span className="text-primary">Gym</span>Trek
            </h1>
          </Link>
          <div
            className="flex gap-20 font1"
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
          >
            <div>
              <p>Mail Us</p>
              <p className="hover:text-primary">admin@gmail.com</p>
            </div>
            <div>
              <p>Call To</p>
              <p className="hover:text-primary">111 222 333</p>
            </div>
          </div>
        </div>
      </div>
      <nav className="md:bg-primary text-sm uppercase">
        <div className="container flex justify-between items-center py-3 max-w-screen-xl mx-auto">
          {/* Logo Section */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase lg:hidden md:hidden">
            <Link to={"/"}>
              <p>
                Gym
                <span className="text-secondary">Trek</span>
              </p>
            </Link>
          </div>

          {/* Menu Section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 md:text-white">
              {NavbarMenu?.map((item) => {
                return (
                  <li key={item.id}>
                    <Link
                      className="inline-block py-1 px-3 hover:text-black font-semibold navbar-link"
                      to={item.link}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Icons Section */}
          <div className="flex items-center justify-end">
            <div className="md:hidden" onClick={() => setOpen(!open)}>
              <MdMenu className="text-4xl" />
            </div>
            <button className="text-2xl hover:bg-primary hover:text-black text-white rounded-full p-2">
              <Link to={"/cart"}>
                <FaShoppingCart />
              </Link>
            </button>
          </div>

          {/* Mobile Menu Section */}
        </div>
      </nav>

      {/* Mobile Sidebar Section  */}
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Navbar;
