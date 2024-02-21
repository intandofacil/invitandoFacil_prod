import React from "react";

const BannerConFoto = () => {
  return (
    <div
      className="
        bg-[url('/assets/images/bannerPC.jpeg')]
        cell:bg-[url('/assets/images/bannerCell.jpeg')]
        w-full h-[400px]  bg-center
        bg-no-repeat bg-cover 
        cell:h-[50vh]
    "
    ></div>
  );
};

export default BannerConFoto;
