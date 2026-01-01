import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Home from '../Pages/Home';
import Cards from '../Components/Cards';
import Footer from '../Components/Footer';

const HomeLayout = () => {
    return (
        <div>
          <header><Navbar></Navbar></header>
          <main>
            {/* home slider */}
           <section>
             <Outlet>
                
            </Outlet>
           </section>
          </main>
          <Footer></Footer>
        </div>
    );
};

export default HomeLayout;