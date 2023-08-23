import { Card } from "react-bootstrap";
import Image from "next/image";
import react from "react";

interface CardProps {
  source?: string;
  alt?: string;
  title?: string;
  content?: string;
  src?: string | {};
  id?: number;
}

export default function MyCard(props: CardProps) {
  return (
    <>
      <Card style={{ padding: "4em" }}>
        <Card.Header style={{ textAlign: "center" }}>{props.title}</Card.Header>
        <Image
          //@ts-expect-error
          alt={props.alt}
          //@ts-expect-error
          src={props.source}
          sizes="100vw"
          width={10}
          height={20}
          // Make the image display full width
          style={{
            width: "20em",
            height: "auto",
          }}
        />
        <Card.Body>{props.content}</Card.Body>
      </Card>
    </>
  );
}
