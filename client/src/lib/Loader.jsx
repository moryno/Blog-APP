import { HashLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh - 64px)] md:min-h-[calc(100vh - 80px)] absolute inset-0">
      <HashLoader color="#0f766e " />
    </div>
  );
};

export default Loader;
