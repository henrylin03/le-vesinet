import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

/* pages */
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import AboutUsPage from "./pages/AboutUsPage";
import CartPage from "./pages/CartPage";

/* css */
import "./styles/normalise.css";
import "./styles/global.css";
import "@mantine/core/styles.css";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "products", element: <ProductsPage /> },
  { path: "about-us", element: <AboutUsPage /> },
  { path: "cart", element: <CartPage /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  </StrictMode>,
);
