//nod modules
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import "./App.css"
// components
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ProductsList from "./components/ProductsList/ProductsList";
import AuthContextProvider from "./contexts/authContext";
import ProductsContextProvider from "./contexts/productsContext";

// css

const App = () => {
  let routes = [
    {
      link: "/",
      element: <Home />,
      id: 1,
    },
    {
      link: "/products",
      element: <ProductsList />,
      id: 2,
    },
    {
      link: "/auth",
      element: <Auth />,
      id: 2,
    },
  ];
  return (
    <AuthContextProvider >
    <ProductsContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          {routes.map((item) => (
            <Route path={item.link} element={item.element} />
          ))}
        </Routes>
        <Footer />
      </BrowserRouter>
    </ProductsContextProvider>
    </AuthContextProvider>
  );
};

export default App;
