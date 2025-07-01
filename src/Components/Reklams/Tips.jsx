import React from "react";

const tips = [
  {
    title: "Burundagi tuklarni olish zararlimi?",
    image:
      "https://scontent.cdninstagram.com/v/t51.75761-15/489756314_17996203715785885_6837081452120864504_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=102&ig_cache_key=MzYwNzAyMDA1MzI4NDA4NDIzNg%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExNzB4MjA4MC5zZHIifQ%3D%3D&_nc_ohc=--cfG7sY-3MQ7kNvwGnHv0l&_nc_oc=AdkP_QywB_YLgad1WFGIEj9OXY5RM_pRXcj_xD8Ur_qvLAMwYCa1WFUiF1DeR58JG8s&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=b1nPyZNxw0jya67rLcRdXQ&oh=00_AfNH_qJwmd-rHQm0WWE_UK6QAGqPVRVWzGmNzmhN19uV_g&oe=6869C599",
    url: "https://www.instagram.com/sampi_medline/reel/DIOtaCttVoM/",
  },
  {
    title: "Yozda immunitetni qanday mustahkamlash mumkin?",
    image: "/tips/immunitet.jpg",
    url: "https://instagram.com/p/def456",
  },
  {
    title: "Bolalarda LOR muammolari va davolash usullari",
    image: "/tips/bolalar-lor.jpg",
    url: "https://instagram.com/p/ghi789",
  },
];

const Tips = () => {
  return (
    <section id="tips" className="py-12 px-4 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">
          🧠 Instagramdagi foydali videolarimiz
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300 text-left"
            >
              <img
                src={tip.image}
                alt={tip.title}
                className="w-full h-96 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-3">{tip.title}</h3>
              <a
                href={tip.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-pink-500 text-white rounded-full text-sm hover:bg-pink-600 transition"
              >
                Instagramda ko‘rish
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tips;
