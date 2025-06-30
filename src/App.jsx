import React from "react";
import { NavbarSimple } from "./Components/Navbar/Navbar";
import { CarouselTransition } from "./Components/Carousel/Carousel";
import { ProfileCardFarhod } from "./Components/Card/CardFarhod";
import { ProfileCardSunnat } from "./Components/Card/CardSunnat";

function App() {
  return (
    <div className="min-h-screen bg-white ">
      <NavbarSimple />
      <CarouselTransition />
      <div className="flex mx-72 justify-between mt-4">
        <ProfileCardSunnat />
        <ProfileCardFarhod />
      </div>
      <div className="flex pl-48 mt-4">
        <p className="text-3xl font-bold text-gray-500">Bizning manzil</p>
      </div>
      <section
        className="flex justify-center mt-4
        "
      >
        <iframe
          src="https://yandex.uz/map-widget/v1/?ll=69.331509%2C41.364711&z=18.8&mode=routes&rtext=~41.364888%2C69.331461&rtt=auto"
          width="75%"
          height="500"
          title="Yandex Map"
          className="rounded-2xl shadow-lg"
        ></iframe>
      </section>

      <main className="mt-4 mx-48">
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-700">Biz haqimizda</h2>
          <p>
            Sampi Medline – Toshkent shahridagi zamonaviy tibbiy markaz. Bizda
            LOR va protsedura xonalari mavjud.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Aloqa</h2>
          <p>📞 +998 (95) 560-44-44</p>
          <p>
            📍 111218, Toshkent, Yunusobod tumani, Toshkent Xalq Avtomobil Yo‘li
            ko‘chasi
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;

// File: src/Components/Navbar/Navbar.jsx
