import { Component } from "react";

import { hardRefreshAndEmptyCache } from "../../helpers/common";
import ErrorIcon from "./ErrorIcon";

class AppErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log("error: ", error);
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log("errorInfo: ", errorInfo);
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center flex-1 p-4">
          <ErrorIcon />
          <h2 className="text-lg font-semibold mt-4 text-teal-700">
            Ah! Something went wrong.
          </h2>
          <p className="text-gray-500 mt-2">
            Brace yourself till we get the error fixed.
          </p>
          <p className="text-gray-500 mt-1">
            {" "}
            You may also refresh the page or try again later.
          </p>
          <br />
          <button
            onClick={hardRefreshAndEmptyCache}
            className="bg-teal-700 px-4 py-3 text-white font-medium rounded-lg mt-4"
          >
            Refresh
          </button>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}

export default AppErrorBoundary;
