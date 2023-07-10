import react from "react";
import { Card as BSCard } from "react-bootstrap";

//@ts-expect-error
const Section = ({ children }) => {
  return <BSCard style={{ margin: "2em", padding: "1em" }}>{children}</BSCard>;
};
export default Section;
