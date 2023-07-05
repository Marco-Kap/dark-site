import react from "react";
import Image from "next/image";
import { Box, Card, Container, Fade } from "@mui/material";

//const [shown, setshown] = useState(false);

//@ts-expect-error
export default function Img({ source, alt }) {
  return (
    <>
      <Card></Card>

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
