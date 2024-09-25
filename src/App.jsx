import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/root/Layout";
import Sustainable from "./components/Sustainable";
import Motive from "./components/Motive";
import Product from "./components/Product";
import Offering from "./components/Offering";

function App() {
  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sustainable" element={<Sustainable />} />
        <Route path="/company" element={<Product />} />
        <Route path="/motive" element={<Motive />} />
        <Route path="/make" element={<Offering />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
