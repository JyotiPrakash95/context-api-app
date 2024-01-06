import { useState } from "react";
import ChildComponent from "./ChildComponent"; 
import { colorContext } from "../context";

const PerentChild = (props) => {
    const [color, setColor] = useState("#000000")
    console.log(colorContext)
    return (
      <>
        <h1>Pick a color</h1>
        <input
          type="color"
          onChange={(e) => {
            setColor(e.target.value);
          }}
          value={color}
        />

        {/* providing context */}
        <colorContext.Provider value={color}>
          <ChildComponent />
        </colorContext.Provider>
      </>
    );
}
export default PerentChild;