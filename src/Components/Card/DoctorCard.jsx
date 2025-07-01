import React from "react";

const DoctorCard = ({ image, fullName, instagram, telegram, facebook }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition duration-300">
      <img
        src={image}
        alt={fullName}
        className="w-60 h-60 mx-auto rounded-xl object-cover mb-4 border-2 border-blue-100"
      />
      <h3 className="text-lg font-semibold mb-2">{fullName}</h3>

      <div className="flex justify-center space-x-1">
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-sm text-blue-600 underline hover:text-blue-800"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/2048px-Instagram_logo_2022.svg.png"
            alt=""
            className="w-12 h-12 inline-block mr-1"
          />
        </a>
        <a
          href={telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-sm text-blue-600 underline hover:text-blue-800"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/1200px-Telegram_2019_Logo.svg.png"
            alt=""
            className="w-12 h-12 inline-block mr-1"
          />
        </a>
        <a
          href={facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-sm text-blue-600 underline hover:text-blue-800"
        >
          <img
            src="https://z-m-static.xx.fbcdn.net/rsrc.php/v4/yD/r/5D8s-GsHJlJ.png"
            alt=""
            className="w-12 h-12 inline-block mr-1"
          />
        </a>
      </div>
    </div>
  );
};

export default DoctorCard;
