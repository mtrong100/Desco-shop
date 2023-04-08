import "./App.scss";
import "swiper/css";
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { ShopProvider } from "./context/shop-context";

const HomePage = lazy(() => import("./pages/HomePage"));
const ShoppingCart = lazy(() => import("./pages/ShoppingCart"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            <span className="loadingCircle"></span>
          </div>
        }
      >
        <ShopProvider>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/cart" element={<ShoppingCart />} />
              <Route path="/product/:id" element={<ProductDetails />} />
            </Route>
          </Routes>
        </ShopProvider>
      </Suspense>
    </>
  );
}

export default App;
