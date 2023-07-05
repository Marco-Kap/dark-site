import * as React from "react";
import BSNav from "../components/BSNav";
import Img from "../components/Img";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap";
import Row from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import { PropsOf } from "@emotion/react";

interface Props {
  Container: React.ElementType
  Row:        React.ElementType;
}
const Home: ReactFunctionComponent<Props> = () => {
    return (
    <Container fluid="md">
      <Row>
        <Col>1 of 1</Col>
      </Row>
    </Container>
  );
}
export default Home;


