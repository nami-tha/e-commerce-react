import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from "../components/footer/Footer";
import Home from "../components/home/Home";
import Header from "../components/header/Header";
import Logout from "../Logout/Logout";
import ProductDetails from "../components/ProductDetails/ProductDetails";
function RoutesLayout() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/e-commerce-react' element={<Home/>}/>
          <Route path='/logout' element={<Logout/>}/>
          <Route path='/product/:id' element={<ProductDetails/>}/>
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}
export default RoutesLayout;
