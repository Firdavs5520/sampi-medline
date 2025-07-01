import { div } from "framer-motion/client";
import React from "react";

const About = () => {
  return (
    <div>
      <section
        id="aboutMobile"
        className="py-8 px-4 bg-white text-gray-800 sm:hidden"
      >
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">Biz haqimizda</h2>

          <p className="mb-4 text-center">
            <strong>Sampi Medline</strong> — Toshkentdagi zamonaviy klinika.
          </p>

          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>
              <strong>LOR xizmatlari:</strong> quloq, burun, tomoq muolajalari
            </li>
            <li>Quloq yuvish, sinuzit, rinit, faringit davosi</li>
            <li>Endoskopik tekshiruvlar</li>
            <li>
              <strong>Muolajalar:</strong> ukol, sistema, fizioterapiya
            </li>
            <li>Vitamin va immunitet muolajalari</li>
            <li>Tajribali shifokorlar, tezkor xizmat, qulay narxlar</li>
          </ul>

          <div className="mt-6 text-center text-sm">
            📍 Toshkent
            <br />
            🌐{" "}
            <a
              href="https://sampi-medline.vercel.app"
              className="text-blue-600 underline"
            >
              sampi-medline.vercel.app
            </a>
            <br />
            📞 +998 95 560 44 44
          </div>
        </div>
      </section>
      <section
        id="about"
        className="py-12 px-4 md:px-12 bg-white text-gray-800 sm:flex hidden"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Biz haqimizda</h2>
          <p className="text-lg mb-6 text-center">
            <strong>Sampi Medline</strong> — bu Toshkentdagi zamonaviy va
            ishonchli klinika. Biz sog‘ligingiz uchun barcha sharoitlarni
            yaratganmiz.
          </p>

          <div className="space-y-6 text-base leading-relaxed">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                🔹 Barcha LOR xizmatlari:
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Quloq, burun, tomoq kasalliklarini davolash</li>
                <li>Quloq yuvish va tozalash</li>
                <li>
                  Sinuzit, faringit, rinit kabi kasalliklar uchun muolajalar
                </li>
                <li>LOR endoskopiyasi va zamonaviy tekshiruvlar</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                🔹 Barcha muolaja xizmatlari:
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Ukol qilish (injektsiya)</li>
                <li>Sistemalar qo‘yish</li>
                <li>Fizioterapiya muolajalari</li>
                <li>Immunitetni ko‘taruvchi muolajalar</li>
                <li>Vitamin terapiyalari</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                🔹 Qo‘shimcha qulayliklar:
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Tajribali va mehribon shifokorlar</li>
                <li>Toza va qulay muhit</li>
                <li>Tezkor va sifatli xizmat</li>
                <li>Mos narxlar va e’tiborli yondashuv</li>
              </ul>
            </div>

            <p className="mt-6 font-medium text-left">
              🎯 Maqsadimiz — bemorlarni sog‘lom hayotga qaytarish va ularga
              ishonchli tibbiy yordam ko‘rsatishdir.
            </p>
            <h1 className="font-medium text-center">Sampi Medline</h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
