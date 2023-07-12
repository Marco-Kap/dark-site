import Image from "next/image";
import { Container } from "react-bootstrap";
import useMediaQuery from "./../public/utils/useMediaQuery";

export type Props = {
  source: string;
  alt: string;
  text?: string;
};

export default function Banner(props: Props) {
  const breakpoint_1 = useMediaQuery(768);
  console.log(!breakpoint_1 ? "nicht breakpoint" : "breakpoint erreicht");
  return (
    <>
      <div>
        <Image
          alt={props.alt}
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
            backgroundColor: !breakpoint_1 ? "lightgrey" : "",
            position: "absolute",
            translate: "20vw -66vw",
            opacity: 0.6,
            alignItems: "center",
            display: "flex",
          }}
        >
          {!breakpoint_1 ? (
            <div
              style={{
                color: "red",
              }}
            >
              <h2 style={{ opacity: "1", fontSize: "2vw" }}>{props.text}</h2>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
}
