import { useState, useEffect } from "react";

export type ButtonProps = {
  onClick: () => {};
};

export default function ScrollButton(props: ButtonProps) {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    //@ts-expect-error
    const onScroll = (e) => {
      setScrollValue(e.target.documentElement.scrollTop);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollValue]);

  return (
    <button
      onClick={props.onClick}
      style={
        scrollValue <= 6
          ? {
              visibility: "visible",
              borderRadius: "50%",
              width: "10em",
              height: "10em",
              opacity: "80%",
              float: "left",
              position: "absolute",
              zIndex: "2",
              translate: "40vw -26vw",
              backgroundColor: "red",
              alignItems: "center",
              shadow: "1px ",
              
            }
          : { visibility: "collapse" }
      }
    >
      {" "}
      <img
        src="../images/angles-down-solid.svg"
        alt="nach unten"
        style={{
          widht: "120px",
          height: "120px",
          opacity: "60%",
        }}
      ></img>
    </button>
  );
}
