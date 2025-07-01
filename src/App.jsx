import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { CarouselTransition } from "./Components/Carousel/Carousel";
import Doctors from "./Components/Card/Doctors";
import { SimpleFooter } from "./Components/Footer/Footer";
import About from "./Components/Biz haqimizda/About";
import Tips from "./Components/Reklams/Tips";

import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Sampi Medline - Salomatlik Markazi</title>
        <meta
          name="description"
          content="Sampi Medline - Toshkentdagi zamonaviy LOR klinikasi. Konsultatsiya, davolash, protsedura xizmatlari."
        />
        <meta
          name="keywords"
          content="Sampi Medline, klinika, LOR, protsedura, Toshkent, tibbiyot, davolash, LOR shifokor, quloq, burun, tomoq"
        />
        <link rel="canonical" href="https://sampi-medline.vercel.app/" />
        <meta name="robots" content="index, follow" />

        {/* ✅ Yandex tasdiqlash tegi */}
        <meta name="yandex-verification" content="02edfd513a40282d" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sampi Medline" />
        <meta property="og:url" content="https://sampi-medline.vercel.app/" />
        <meta
          property="og:title"
          content="Sampi Medline - LOR va tibbiy xizmatlar"
        />
        <meta
          property="og:description"
          content="Toshkentdagi zamonaviy klinika. LOR, protsedura, konsultatsiya va davolash xizmatlari."
        />
        <meta
          property="og:image"
          content="https://sampi-medline.vercel.app/preview.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Sampi Medline – Salomatlik Markazi"
        />
        <meta
          name="twitter:description"
          content="Toshkentdagi zamonaviy klinika - LOR, protsedura, konsultatsiya va xamyonbop narxlarda davolash xizmatlari."
        />
        <meta
          name="twitter:image"
          content="https://sampi-medline.vercel.app/preview.jpg"
        />
      </Helmet>

      <div className="bg-white">
        <Navbar />
        <CarouselTransition />
        <About />
        <div className="flex justify-between mt-4 mx-10 flex-wrap">
          <Doctors />
        </div>
        <Tips />
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
    </HelmetProvider>
  );
}

export default App;
