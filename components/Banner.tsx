import react, { useState, useEffect } from "react";
import Image from "next/image";
import { Container } from "react-bootstrap";

//@ts-expect-error
export default function Banner({ source, alt }) {
  return (
    <>
      <Image
        alt={alt}
        // Importing an image will
        // automatically set the width and height
        src={source}
        sizes="100vw"
        width={100}
        height={300}
        // Make the image display full width
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </>
  );
}
