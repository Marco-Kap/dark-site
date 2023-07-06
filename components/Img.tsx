import react, { useEffect, useState } from "react";
import Image from "next/image";
import {Container, Fade} from "react-bootstrap"

//@ts-expect-error
export default function Img({ source, alt }) {
  const [shown, setShown] = useState(false) ;
   
    useEffect() {}
  
  return (
    <Container>
    <Fade in={shown}><div></div></Fade>
    <Image
      alt={alt}
      // Importing an image will
      // automatically set the width and height
      src={source}
      sizes="100vw"
      width={50}
      height={30}
      // Make the image display full width
      style={{
        width: "100%",
        height: "auto",
      }}
    /></Container>
    
  );
}
