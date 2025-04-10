import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const MainPage = () => {
    return(
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainPage;