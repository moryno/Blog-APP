import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-40 3xl:px-80">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
