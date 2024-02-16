"use client";
import React from "react";
import { MapPin } from "lucide-react";
import Button from "../UI/Button";
import AnimatedTitle from "../UI/AnimatedTitle";
const Recepción = () => {
  return (
    <section className="py-6">
      <div className="flex flex-col gap-2 justify-center items-center ">
        <AnimatedTitle title="Recepción" />
        <p className=" text-2xl cell:text-xl cell:px-2 cell:font-bold">
          Quinta Veneto
        </p>
        <p className=" text-2xl cell:text-xl cell:px-2 cell:font-bold">
          20:30 hrs
        </p>
        <div className=" flex items-center cell:w-[90%] cell:mx-auto cell:flex-col">
          <MapPin className=" text-complementaryDark font-bold" />
          <p className=" text-xl text-center ">
            Cuarta Peral #311 san Ignacio, Arteaga coahuila
          </p>
        </div>
        <Button text="Cómo llegar" />
      </div>
      {/*TODO: Preguntar si quieren foto de la iglesia, no lo veo necesario peor bueno  */}
    </section>
  );
};

export default Recepción;
