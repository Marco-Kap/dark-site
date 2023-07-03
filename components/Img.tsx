import react from "react";
import Image from "next/image";

//@ts-expect-error
export default function Img({ source, alt }) {
  return (
    <Image className="avatar" src={source} alt={alt} width={50} height={50} />
  );
}
