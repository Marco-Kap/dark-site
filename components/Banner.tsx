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
            height: "20vw",
            width: "66vw",
            float: "left",
            zIndex: 2,
            backgroundColor: "red",
            position: "absolute",
            translate: "26vw -42vw",
            opacity: 0.75,
            alignItems: "center",
            display: "flex",
          }}
        >
          <div
            style={{
              color: "white",
            }}
          >
            <h2 style={{ opacity: "1", fontSize: "5vw", paddingLeft: "0.3em" }}>
              {props.text}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
