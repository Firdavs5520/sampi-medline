import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { CarouselTransition } from "./Components/Carousel/Carousel";

import Doctors from "./Components/Card/Doctors";
import { SimpleFooter } from "./Components/Footer/Footer";
import About from "./Components/Biz haqimizda/About";
import Tips from "./Components/Reklams/Tips";

function App() {
  return (
    <div className=" bg-white   ">
      <Navbar />
      <CarouselTransition />
      <About />
      <div className="flex  justify-between mt-4 mx-10 flex-wrap">
        <Doctors />
      </div>
      <Tips />
      <div className="flex justify-center my-4 ">
        <iframe
          src="https://yandex.uz/map-widget/v1/?ll=69.3315%2C41.3649&z=17&l=map&pt=69.3315,41.3649,pm2rdm"
          width="94.5%"
          height="400"
          frameBorder="0"
          allowFullScreen
          className="rounded-xl "
        ></iframe>
      </div>
      <SimpleFooter />
    </div>
  );
}

export default App;
