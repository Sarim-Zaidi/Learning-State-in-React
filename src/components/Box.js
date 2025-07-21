import { click } from "@testing-library/user-event/dist/click"
import { useState } from "react"

function Box(props) {


        // const [toggle, setToggle] = useState(props.IsOn)

    // function Toggle() {
        // setToggle(prevtoggle =>{
            // return !prevtoggle
    // }
// )
    // }

        const styles = {
        backgroundColor: props.IsOn ? "#222222": "#cccccc"
    }

 return(

    <div onClick={()=>props.handleClick(props.id)} style={styles} className="box" key={props.id}>Box {props.id}</div>
 )   
}

export default Box