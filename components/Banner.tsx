import react, { useState, useEffect } from "react";
import Image from "next/image";
import { Container, Fade } from "react-bootstrap";

//@ts-expect-error
export default function Banner({ source, alt, text }) {
  const place = "hallo";
  return (
    <>
      <div>
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
            zIndex: 1,
          }}
        />
        <div
          style={{
            height: "66vw",
            width: "20vw",
            float: "left",
            zIndex: 2,
            backgroundColor: "crimson",
            position: "absolute",
            translate: "100% -100%",
            opacity: 0.3,
          }}>
          <div>{place}</div>
        </div>
      </div>
    </>
  );
}
