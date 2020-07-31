import React, { useEffect } from "react";
import $ from 'jquery';
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Masthead from "./components/Masthead";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import MediaBar from "./components/MediaBar";
import About from "./components/About";
import Technologies from "./components/Technologies";
import {
  v3electric,
  v3careers,
  v3dashboard,
  kojakitchen,
  trofastpartners,
  newgrowthliving,
} from "./assets/img";


function App() {
  const portfolioLinks = [
    {
      href: "https://v3electric.com/",
      image: v3electric,
      title: "V3 Electric",
      caption: "React, Next, Node, Express, PostgreSQL",
    },
    {
      href: "https://v3careers.com/",
      image: v3careers,
      title: "V3 Careers",
      caption: "React, Next, Node, Express, PostgreSQL",
    },
    {
      href: "https://dashboard.v3electric.com/",
      image: v3dashboard,
      title: "V3 Dashboard",
      caption: "Angular, Sails",
    },
    {
      href: "/",
      image: kojakitchen,
      title: "Koja Kitchen",
      caption: "Restaurant ordering system for Koja Sac",
    },
    {
      href: "https://www.trofastpartners.com/",
      image: trofastpartners,
      title: "TrofastPartners",
      caption: "React, Next, Node, Express, PostgreSQL",
    },
    {
      href: "https://www.newgrowthliving.com/",
      image: newgrowthliving,
      title: "NG Living",
      caption: "React, Next, Node, Express, PostgreSQL",
    },
  ];

  useEffect(() => {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this).scrollspy('refresh')
    })
  })
 

  return (
    <div className="App">
      <Nav />
      <Masthead
        intro1="Ryan Lafazan"
        intro2="Software Engineering"
        button="Learn More"
      />
      <About />
      <MediaBar />
      <Technologies />
      <Portfolio portfolioLinks={portfolioLinks}>
        Websites and applications either worked on or built from the ground up
        by myself and the software teams I have worked on.
      </Portfolio>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
