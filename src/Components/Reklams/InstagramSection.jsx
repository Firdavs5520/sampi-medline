import React from "react";

const InstagramSection = () => {
  return (
    <div className="bg-white py-8 px-4 text-center">
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2">
        Biz ijtimoiy tarmoqlardaham bormiz
      </h2>
      <p className="text-gray-600 mb-4">
        Yangiliklar va foydali maslahatlar uchun bizni kuzatib boring!
      </p>
      <div className="flex justify-center">
        <a
          href="https://instagram.com/sampi_medline"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-5 py-2 bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium rounded-lg transition duration-200"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1024px-Instagram_logo_2016.svg.png"
            alt=""
            className="w-12 h-12 mr-2"
          />
          Instagramda kuzating
        </a>
      </div>
    </div>
  );
};

export default InstagramSection;
