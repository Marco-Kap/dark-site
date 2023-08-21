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
      className={scrollValue <= 6 ? "scrollbutton" : "coll"}
      onClick={props.onClick}
    >
      {" "}
      <img
        src="../images/angles-down-solid.svg"
        alt="nach unten"
        className={scrollValue <= 6 ? "scrollimg" : "coll"}
      ></img>
    </button>
  );
}
