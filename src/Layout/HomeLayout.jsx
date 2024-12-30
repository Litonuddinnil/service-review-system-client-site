import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Helmet } from 'react-helmet-async';

const HomeLayout = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Home
                </title>
            </Helmet>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;