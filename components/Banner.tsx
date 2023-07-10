import react, { useState, useEffect } from "react";
import Image from "next/image";

export type Props = {
  source: string;
  alt: string;
  text?: string;
};

export default function Banner(props: Props) {
  return (
    <>
      <div>
        <Image
          alt={props.alt}
          // Importing an image will
          // automatically set the width and height
          src={props.source}
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
            backgroundColor: "lightgrey",
            position: "absolute",
            translate: "20vw -66vw",
            opacity: 0.6,
            alignItems: "center",
            display: "flex",
          }}
        >
          <div
            style={{
              fontSize: "2vw",
              color: "red",
            }}
          >
            <h2 style={{ opacity: 1 }}>{props.text}</h2>
          </div>
        </div>
      </div>
    </>
  );
}
