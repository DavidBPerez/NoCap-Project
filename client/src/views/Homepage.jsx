import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";

import './Css/Homepage.css';

// Home Nav Bar Displayed Elements
const homeBarItems = [{ pagePath: "/about", imgDesc: "About Page", imgPath: "../../public/img/information.png" }];

function HomePageFooter() {
  return (
    <Footer />
  );
}

export default function HomePage() {
  return (
    <div id="home-page" className="container-fluid min-vh-100">
      <Header navOptions={homeBarItems} />
      <div id="img-container" className="w-100 d-flex justify-content-center align-items-center">
        <Link to="/login" id="center-button" className="display-6 text-light m-auto position-absolute text-decoration-none">
          <p className="text-center">Play the Game</p>
        </Link>
      </div>
      <HomePageFooter />
    </div>
  );
}
