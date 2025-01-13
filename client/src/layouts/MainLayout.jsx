import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const MainLayout = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`bg-[${theme === "light" ? "#ffffff" : "#0f172a"}] text-[${
        theme === "dark" && "#ddd"
      }] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-40 3xl:px-80`}
    >
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
