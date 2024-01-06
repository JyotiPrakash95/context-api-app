import { useContext } from "react";
import { colorContext } from "../context";
const GrendPerent =()=> {
    const color = useContext(colorContext);
    console.log(color);
  return (
    <>
        <h2 style={{ color: color }}>Color: {color}</h2>
        
        {/* this is the way how class component use context */}
      {/* <colorContext.Consumer>
        {(value) => <p style={{ color: value.color }}>color: {value.color}</p>}
      </colorContext.Consumer> */}
    </>
  );
};
export default GrendPerent;
