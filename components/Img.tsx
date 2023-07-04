import react from "react";
import Image from "next/image";
import { Box, Container } from "@mui/material";
import mountains from "../public/images/team.jpg";

//@ts-expect-error
export default function Img({ source, alt }) {
  return (
    <Box style={{ display: "flex", flexDirection: "column" }}>
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
    </Box>
  );
}
