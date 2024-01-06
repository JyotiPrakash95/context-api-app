import { useContext } from "react";
import { colorContext } from "../context";
function GrendPerent() {
    const color = useContext(colorContext);
    console.log(color);
  return (
    <>
          <h2 style={{ color: color }}>Color: {color}</h2>
    </>
  );
};
export default GrendPerent;
