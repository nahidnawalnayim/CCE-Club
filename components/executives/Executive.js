import Image from "next/image";
import React from "react";

const Executive = ({ src, name, position }) => {
  return (
    <div className="flex flex-col items-center space-y-3 ">
      <Image src={src} alt={name} height={280} width={270} />
      <h1 className="font-bold text-2xl">{name}</h1>
      <h2 className="font-semibold text-2xl">{position}</h2>
    </div>
  );
};

export default Executive;
