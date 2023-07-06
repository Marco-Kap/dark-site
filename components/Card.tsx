import { Card as BSCard } from "react-bootstrap";

//@ts-expect-error
export default function Card({ children }) {
  <BSCard className={"m-2"}>{children}</BSCard>;
}
