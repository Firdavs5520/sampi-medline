import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mx-10 my-4 border p-4 rounded-xl shadow-gray-500 shadow-sm ">
      <div>
        <img
          src="https://i.ibb.co/nsx7n7v0/SAMPI-MEDLINE-SALOMATLIK-MARKAZI.png"
          alt=""
          className="h-8"
        />
      </div>
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 bg-yellow-500 p-2 rounded-xl">
          <a
            href="https://yandex.uz/maps/?ll=69.331509%2C41.364711&mode=routes&rtext=~41.364888%2C69.331461&rtt=auto&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D112768636237&z=18

"
            className="flex items-center gap-2"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Yandex_Go_icon.svg/1200px-Yandex_Go_icon.svg.png"
              alt=""
              className="w-8"
            />
            <p className="hidden sm:flex">Yandex Taxi orqali kelish</p>
          </a>
        </button>
        <button className="p-2 bg-blue-gray-500 text-white rounded-xl">
          <a href="tel:+998955604444" className="flex items-center gap-2">
            <img
              src="https://freesvg.org/img/phone-call-icon.png"
              alt=""
              className="w-8"
            />
            <p className="hidden sm:flex">Qo'ngiroq qilish</p>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
