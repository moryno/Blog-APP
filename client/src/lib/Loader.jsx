import { useContext } from "react";
import { HashLoader } from "react-spinners";
import { ThemeContext } from "../context/ThemeContext";

const Loader = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`flex items-center justify-center min-h-[calc(100vh - 64px)] md:min-h-[calc(100vh - 80px)] absolute inset-0 ${
        theme === "light" ? "bg-light text-light" : "bg-dark text-dark"
      }`}
    >
      <HashLoader color="#0f766e " />
    </div>
  );
};

export default Loader;
