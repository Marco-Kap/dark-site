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
    <div
      style={
        scrollValue <= 4
          ? { visibility: "visible" }
          : { visibility: "collapse" }
      }
    >
      <button
        onClick={props.onClick}
        style={{
          borderRadius: "50%",
          width: "10em",
          height: "10em",
          opacity: "80%",
          float: "left",
          position: "absolute",
          zIndex: "2",
          translate: "40vw -32vw",
          backgroundColor: "red",
          alignItems: "center",
          shadow: "1px blue",
        }}
      >
        <p style={{ color: "white", fontSize: "1.2vw" }}>Willkommen</p>
        <img
          src="../images/arrow-down_icon-icons.com_72377.png"
          alt="pfeil"
          style={{
            widht: "30px",
            height: "40px",
            float: "left",
            position: "absolute",
            zIndex: "2",
            translate: "-1.2vw -1vw",
          }}
        ></img>
      </button>
    </div>
  );
}
