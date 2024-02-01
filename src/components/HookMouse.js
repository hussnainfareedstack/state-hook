import React, { useEffect, useState } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("EventListener mousemove added");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("component unmounting code. (remove event listener)");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      X: {x} <br></br> Y: {y}
    </div>
  );
}

export default HookMouse;
