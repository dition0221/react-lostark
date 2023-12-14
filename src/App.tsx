import { RouterProvider, createBrowserRouter } from "react-router-dom";
// CSS
import GlobalFont from "./styles/GlobalFont";
import GlobalStyle from "./styles/GlobalStyle";
// Router
import Layout from "./Layout";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <GlobalFont />
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}
