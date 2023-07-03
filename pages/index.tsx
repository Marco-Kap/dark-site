import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../components/Link";
import ProTip from "../components/ProTip";
import Copyright from "../components/Copyright";
import Navbar from "../components/Navbar";
import Paper from "@mui/material/Paper";
import Img from "../components/Img";

export default function Home() {
  const src = "/../public/images/team.jpg";
  const alt = "image description";
  console.log(src);
  return (
    <Container sx={{ padding: 5 }} maxWidth="lg">
      <Navbar />
      <Img source={src} alt={alt} fill />
      <Box
        sx={{
          px: 4,
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Paper>
          <Typography variant="h4" component="h1" gutterBottom>
            Material UI - Next.js example in TypeScript
          </Typography>
          Brunch blue bottle kogi tacos, jawn paleo letterpress fingerstache
          artisan pok pok. Yuccie godard flexitarian umami. Vaporware twee vinyl
          pug, godard taiyaki affogato knausgaard try-hard. Shabby chic cardigan
          wayfarers, venmo echo park same gochujang selvage DIY tote bag
          coloring book. Cold-pressed bicycle rights roof party church-key
          Brooklyn knausgaard single-origin coffee tousled meggings narwhal.
          <Typography variant="body1" component="section"></Typography>
          <Link href="/about" color="secondary">
            Go to the about page
          </Link>
        </Paper>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
