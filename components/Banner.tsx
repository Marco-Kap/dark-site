import Image from "next/image";
import { Container } from "react-bootstrap";
import useMediaQuery from "./../public/utils/useMediaQuery";

export type Props = {
  source: string;
  alt: string;
  text?: string;
  fieldDisabled?: boolean;
};
export default function Banner(props: Props) {
  const breakpoint_1 = useMediaQuery(768);
  return (
    <Container>
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
        <div className={props.fieldDisabled ? "coll" : "slider"}>
          <div
            style={{
              color: "white",
            }}
          >
            <h2
              style={{ opacity: "1", fontSize: "3.6vw", paddingLeft: "0.3em" }}
            >
              {props.text}
            </h2>
          </div>
        </div>
      </div>
    </Container>
  );
}
