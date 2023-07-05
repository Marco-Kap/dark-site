import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../components/Link";
import ProTip from "../components/ProTip";
import Copyright from "../components/Copyright";
import BSNav from "../components/BSNav";
import Navbar from "../components/Navbar";
import Paper from "@mui/material/Paper";
import Img from "../components/Img";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const src = "/../public/images/team.jpg";
  const alt = "image description";
  console.log("!!!!!!!!!!!!!!!" + src);

  return (
    <>
      <BSNav />
      <Img source={src} alt={alt} />
      <ProTip />
      <Copyright />
    </>
  );
}
