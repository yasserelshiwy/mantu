import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import { ourStore } from "./store/Srore";
import { Provider } from "react-redux";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/product", element: <Product /> },
      ],
    },
  ]);
  return (
    <>
      <Provider store={ourStore}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </>
  );
}
