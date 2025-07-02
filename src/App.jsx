import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { CarouselTransition } from "./Components/Carousel/Carousel";
import Doctors from "./Components/Card/Doctors";
import { SimpleFooter } from "./Components/Footer/Footer";
import About from "./Components/Biz haqimizda/About";
import Tips from "./Components/Reklams/Tips";
import "./index.css"; // yoki sizning Tailwind CSS faylingiz
import InstagramSection from "./Components/Reklams/InstagramSection";
import Example from "./Components/Videos/Video";
import { Route, Routes } from "react-router-dom";
import Maps from "./Components/Maps/Maps";

function App() {
  return (
    <div className="bg-white">
      <Navbar />

      <CarouselTransition />

      <About />
      <div className="flex justify-between mt-4 mx-10 flex-wrap">
        <Doctors />
      </div>
      <Tips />
      <Maps />
      <InstagramSection />
      <Example />
      <SimpleFooter />
    </div>
  );
}

export default App;
