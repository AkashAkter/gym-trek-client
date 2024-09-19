import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import Navbar from "../../pages/shared/Navbar";
import Footer from "../../pages/shared/Footer";

const MainLayout = () => {
  const { items } = useAppSelector((state) => state.cart);

  useEffect(() => {
    window.onbeforeunload = function () {
      return !!items.length;
    };
  });
  return (
    <div className="">
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};
export default MainLayout;
