import { Skeleton } from "antd";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const SkeletonComponent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={"flex gap-2 p-5"}>
      <div>
        <Skeleton.Avatar
          size="large"
          active={true}
          className={`${
            theme === "light" ? "bg-light text-light" : "bg-gray-700 text-dark"
          }`}
        />
      </div>
      <div className="flex flex-col gap-2 rounded-lg w-full">
        {Array(3)
          .fill(0)
          .map((i) => (
            <Skeleton.Input
              className={`${
                theme === "light"
                  ? "bg-light text-light"
                  : "bg-gray-700 text-dark"
              }`}
              key={i}
              active={true}
              block
              size="large"
            />
          ))}
      </div>
    </div>
  );
};

export default SkeletonComponent;
