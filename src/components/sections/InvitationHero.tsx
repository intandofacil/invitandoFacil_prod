import React from "react";
import NoviosName from "../UI/NoviosName";
import NoviosIniciales from "../UI/NoviosIniciales";
import FechaBoda from "../UI/FechaBoda";

const InvitationHero = () => {
  return (
    <div
      style={{
        backgroundImage: "url(../../../assets/images/hero.jpg)",
      }}
      className="
       w-full h-screen
       bg-fixed bg-center bg-no-repeat bg-cover bg-stone-500 bg-blend-multiply
       flex flex-col items-center justify-center    
      "
    >
      {/*informacion de la boda*/}
      <div className="flex flex-col  items-center  justify-between h-full pt-6 pb-10">
        <div className="flex flex-col justify-center items-center">
          <NoviosIniciales novio1="D" novio2="JP" />
          <p className="text-white  my-2  text-2xl cell:text-base cell:text-center cell:px-4">
            Tenemos el honor de invitarte a celebrar Nuestra Boda
          </p>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center">
          <NoviosName novio1="Daniela" novio2="Jose Pablo" />
          <FechaBoda
            day="Sábado"
            numberDate={18}
            hour="20:30"
            year={2024}
            mes="Mayo"
          />
        </div>
      </div>
    </div>
  );
};

export default InvitationHero;