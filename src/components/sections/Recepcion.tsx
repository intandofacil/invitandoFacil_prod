"use client";
import React from "react";
import { dancing } from "@/fonts";
import { MapPin } from "lucide-react";
import Button from "../UI/Button";
// TODO: hacer los titulos como animados en un componente
const Recepción = () => {
  return (
    <section className="py-6">
      <div className="flex flex-col gap-2 justify-center items-center ">
        <h3
          className={`${dancing.className} text-complementaryDark font-bold  text-center text-4xl py-1 cell:text-3xl cell:px-4`}
        >
          Recepción
        </h3>
        <p className=" text-2xl cell:text-xl cell:px-2 cell:font-bold">
          Quinta Veneto
        </p>
        <p className=" text-2xl cell:text-xl cell:px-2 cell:font-bold">
          20:30 hrs
        </p>
        {/*TODO: Dirección con iconito de ubicacion */}
        <div className=" flex items-center cell:w-[90%] cell:mx-auto cell:flex-col">
          <MapPin className=" text-complementaryDark font-bold" />
          <p className=" text-xl text-center ">
            Cuarta Peral #311 san Ignacio, Arteaga coahuila
          </p>
        </div>
        <Button text="Cómo llegar" />
      </div>
      {/*TODO: Preguntar si quieren foto de la iglesia, no lo veo necesario peor bueno  */}

      {/* <div className="flex justify-end">
          <Image alt="iglesia" src={iglesia} className="w-[70%]" />
        </div> */}
    </section>
  );
};

export default Recepción;
