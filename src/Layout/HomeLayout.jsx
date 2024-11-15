import React from "react";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navber from "../Components/Navber";
import LeftNavbar from "../Components/layout-component/LeftNavbar";
import RightNavbar from "../Components/layout-component/RightNavbar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="w-11/12 mx-auto py-3">
        <Navber></Navber>
      </nav>
      <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 text-2xl gap-3">
        <aside className="lest col-span-3">
            <LeftNavbar></LeftNavbar>
        </aside>

        <aside className="main col-span-6">
            <Outlet></Outlet>
        </aside>

        <aside className="right col-span-3">
            <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
