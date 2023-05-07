import React from "react";
// import ReactDOM from "react-dom/client";
import  Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import { IMG_CDN_URL } from "../constants";
// import RestaurantCard from "./components/RestraurantCard";


 const AppLayout = () => {
    return (
        <>
         <Header/>
          <Body/>
          <Footer/>
        </>  
    );
};


export default AppLayout;