import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Layout from "./components/layout";

function App() {
  return (
    <>
      <ToastContainer />
      <Layout />;
    </>
  );
}

export default App;
