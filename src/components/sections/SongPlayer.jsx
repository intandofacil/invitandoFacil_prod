"use client";
import { useState } from "react";
import ReactHowler from "react-howler";
import { Volume2Icon, VolumeXIcon } from "lucide-react";
const SongPlayer = () => {
  const [playing, setPlaying] = useState(false);
  console.log(playing);
  return (
    <div className="fixed   z-10 top-[50%] cel:top-0 right-0 mt-4 ">
      <ReactHowler src="/song.ogg" playing={playing} loop={true} />
      <button
        onClick={() => {
          setPlaying(!playing);
        }}
        className=" w-12 h-12 rounded-l-lg  flex justify-center items-center bg-complementaryDark/90"
      >
        {!playing ? (
          <Volume2Icon fill="#ffffff" className="  text-white  w-[60px]" />
        ) : (
          <VolumeXIcon fill="#ffffff" className="  text-white  w-[60px]" />
        )}
      </button>
    </div>
  );
};

export default SongPlayer;
