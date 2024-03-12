import React, { Fragment } from "react";
import Navbar from "../../Componants/Landing Page Componants/Navbar/Navbar";
import Hero from "../../Componants/Landing Page Componants/Hero/Hero";
import Infography from "../../Componants/Landing Page Componants/Infography/Infography";
import AboutUs from "../../Componants/Landing Page Componants/AboutUs/AboutUs";
import Categories from "../../Componants/Landing Page Componants/Categories/Categories";
import Blogs from "../../Componants/Landing Page Componants/BLogs/Blogs";
import Contact from "../../Componants/Landing Page Componants/Contact/Contact";
import Footer from "../../Componants/Landing Page Componants/Footer/Footer";
import Testimonials from "../../Componants/Landing Page Componants/Testimonials/Testimonials";
import LogIn from "../../Componants/Login-Signup/LogIn";
import SignUp from "../../Componants/Login-Signup/SignUp";

function HomePage() {
  return (
    <Fragment>
      <Navbar></Navbar>
      <Hero></Hero>
      <Infography></Infography>
      <AboutUs> </AboutUs>
      <Categories></Categories>
      <Testimonials></Testimonials>
      <Blogs></Blogs>
      <Contact></Contact>
      <Footer></Footer>
      {/* <LogIn></LogIn> */}
      <SignUp></SignUp>
    </Fragment>
  );
}

export default HomePage;
