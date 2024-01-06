import GrendPerent from "./GrendChild";

const ChildComponent = (props) => {

    return (<>
        <div style={outPot}>
            <GrendPerent />
        </div>
          </>)
}
export default ChildComponent;

const outPot = {
    border: "10px solid #000000",
    margin: "20px",
    padding: "10px",
    fontSize: "30px",
    width: "300px"

}