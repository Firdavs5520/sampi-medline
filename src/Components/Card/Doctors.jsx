import React from "react";
import DoctorCard from "./DoctorCard";

const doctors = [
  {
    image: "https://i.ibb.co/hFCsGZ8P/Sadullayev-Farhod.jpg",
    fullName: "Sadullayev Farhod Xalilillayevich",
    instagram: "https://www.instagram.com/farxod_saydullayev/",
    telegram: "https://t.me/+kKj840CxBbU0M2M6",
  },
  {
    image: "https://i.ibb.co/spnqGbDy/Yusupov-Sunnatillo.jpg",
    fullName: "Yusupov Sunnatillo Abdumalikovich",
    instagram: "https://www.instagram.com/sunnatillo_yusupov/",
    facebook: "https://www.facebook.com/SunnatLor/",
  },
  {
    image: "https://i.ibb.co/spnqGbDy/Yusupov-Sunnatillo.jpg",
    fullName: "Yusupov Sunnatillo Abdumalikovich",
    instagram: "https://www.instagram.com/sunnatillo_yusupov/",
    facebook: "https://www.facebook.com/SunnatLor/",
  },
];

const Doctors = () => {
  return (
    <section
      id="doctors"
      className="py-12 px-4 md:px-12 bg-gray-50 w-full rounded-lg "
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Shifokorlarimiz</h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {doctors.map((doc, index) => (
            <DoctorCard
              key={index}
              image={doc.image}
              fullName={doc.fullName}
              instagram={doc.instagram}
              facebook={doc.facebook}
              telegram={doc.telegram} // Optional, if you want to include Facebook
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
