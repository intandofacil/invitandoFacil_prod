import React from "react";
import { inter } from "@/fonts";
const Button = ({
  text,
  externalLink,
}: {
  text: string;
  externalLink: string;
}) => {
  return (
    <button
      className={`${inter.className} bg-slate-950 my-1 px-4 py-2  text-white rounded-full`}
    >
      <a href={externalLink} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    </button>
  );
};

export default Button;
