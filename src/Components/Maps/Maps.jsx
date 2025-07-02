import React from "react";

const Maps = () => {
  return (
    <div className="flex justify-center my-4 sm:mx-44 mx-4">
      <iframe
        src="https://yandex.uz/map-widget/v1/?ll=69.3315%2C41.3649&z=17&l=map&pt=69.3315,41.3649,pm2rdm"
        width="100%"
        height="350"
        frameBorder="0"
        allowFullScreen
        className="rounded-xl"
      ></iframe>
    </div>
  );
};

export default Maps;
