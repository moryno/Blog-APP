import { Suspense } from "react";
import Loader from "./Loader";

const AppSuspense = ({ children }) => {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
};

export default AppSuspense;
