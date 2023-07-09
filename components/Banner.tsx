import react, { useState, useEffect } from "react";
import Image from "next/image";
import { Container, Fade } from "react-bootstrap";

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
            width: "2vw",
            float: "left",
            zIndex: 2,
            backgroundColor: "crimson",
            position: "absolute",
            translate: "20vw -66vw",
            opacity: 0.3,
            alignItems: "center",
          }}>
          <div
            style={{
              alignSelf: "center",
              justifySelf: "center",
              fontSize: "2vw",
            }}>
            {props.text}
          </div>
        </div>
      </div>
    </>
  );
}
