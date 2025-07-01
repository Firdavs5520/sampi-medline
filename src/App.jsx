import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { CarouselTransition } from "./Components/Carousel/Carousel";

import { ProfileCardSunnat } from "./Components/Card/ProfileCardFarhod";
import { ProfileCardFarhod } from "./Components/Card/ProfileCardSunnat";
import { SimpleFooter } from "./Components/Footer/Footer";

function App() {
  return (
    <div className=" bg-white   ">
      <Navbar />
      <CarouselTransition />
      <div className="flex  justify-between mt-4 mx-10 flex-wrap">
        <ProfileCardFarhod />
        <ProfileCardFarhod />
        <ProfileCardSunnat />
        <ProfileCardSunnat />
        <ProfileCardSunnat />
        <ProfileCardSunnat />
        <ProfileCardSunnat />
      </div>
      <div className="flex justify-center my-4">
        <iframe
          src="https://yandex.uz/map-widget/v1/?ll=69.3315%2C41.3649&z=17&l=map&pt=69.3315,41.3649,pm2rdm"
          width="94.5%"
          height="400"
          frameBorder="0"
          allowFullScreen
          className="rounded-xl"
        ></iframe>
      </div>
      <SimpleFooter />
    </div>
  );
}

export default App;

// File: src/Components/Navbar/Navbar.jsx
