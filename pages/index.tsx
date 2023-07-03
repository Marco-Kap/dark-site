import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../components/Link";
import ProTip from "../components/ProTip";
import Copyright from "../components/Copyright";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Navbar />
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Material UI - Next.js example in TypeScript
        </Typography>
        Brunch blue bottle kogi tacos, jawn paleo letterpress fingerstache
        artisan pok pok. Yuccie godard flexitarian umami. Vaporware twee vinyl
        pug, godard taiyaki affogato knausgaard try-hard. Shabby chic cardigan
        wayfarers, venmo echo park same gochujang selvage DIY tote bag coloring
        book. Cold-pressed bicycle rights roof party church-key Brooklyn
        knausgaard single-origin coffee tousled meggings narwhal.
        <Typography variant="body1" component="section"></Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
