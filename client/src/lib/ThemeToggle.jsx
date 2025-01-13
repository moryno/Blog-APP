import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <div
      onClick={toggle}
      className="w-10 h-5 rounded-[50px] cursor-pointer flex items-center justify-between relative"
      style={
        theme === "dark"
          ? {
              background: "white",
            }
          : { background: "#0f172a" }
      }
    >
      <img className="w-4 h-4" src="moon.png" alt="moon" />
      <div
        className="w-4 h-4 rounded-full bg-white absolute"
        style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : {
                right: 1,
                background: "white",
              }
        }
      />
      <img className="w-4 h-4" src="sun.png" alt="sun" />
    </div>
  );
};

export default ThemeToggle;
