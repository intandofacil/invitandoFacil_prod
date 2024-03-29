import Image from "next/image";
import noninos from "../../../public/assets/images/noninos.webp";
import dresscode from "../../../public/assets/images/dresscode.webp";

const InfromacionAdicional = () => {
  return (
    <section className="w-full bg-[#f8f4f1]">
      <div className="w-8/12 mx-auto flex items-center py-4 justify-center  cell:w-full cell:flex-col">
        <div className="flex  flex-col items-center justify-center w-1/2 cell:w-full">
          <Image alt="no niños" src={noninos} />
          <p className="text-lg font-bold">No niños</p>
          <p className="text-lg text-center  cell:w-full cell:px-4">
            ¡Queremos que disfrutes junto con nosotros esa noche especial!
          </p>
        </div>
        <div className="flex  flex-col items-center justify-center w-1/2 cell:w-full">
          <Image alt="dresscode" src={dresscode} />
          <p className="text-lg font-bold">Dress Code Formal</p>
          <p>Traje y vestido de noche</p>
        </div>
      </div>
    </section>
  );
};

export default InfromacionAdicional;
