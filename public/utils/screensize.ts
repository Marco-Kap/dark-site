import { useRef } from "react";

const width = useRef(window.innerWidth);
const height = useRef(window.innerHeight);

export const dimensions = { height, width };
