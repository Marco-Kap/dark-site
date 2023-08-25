import { Card } from "react-bootstrap";
import Image from "next/image";
import react from "react";

interface CardProps {
  source?: string;
  alt?: string;
  title?: string;
  content?: string;
  footer: string;
  id?: number;
}

export default function MyCard(props: CardProps) {
  return (
    <div style={{ border: "1px solid grey" }}>
      <p>ha</p>
    </div>
  );
}
