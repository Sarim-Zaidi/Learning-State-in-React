import {useState} from "react"
import data from "../components/meme"

function Form() {
    const [select, setImg] = useState(0)

    // let select = 0
    function click()
    {
        console.log("Hovered")
        //  select = Math.random() * data.length
        // console.log(select)
        // let chose = data[select]
        setImg(  Math.floor(Math.random() * data.length))
        
    }
    return(
        <div className="overall">
        <div className="form">
            <div className="Form">
                <div className="input">
            <input placeholder = {data[select].text} />
            <input placeholder={data[select].text}/>
            </div>
            <button onClick = {click}>Click Here To Get A New Meme</button>
            </div>
        </div>

 
 
        <div className="img">
        <img src={data[select].img} width="80%" height="300px"/>
        </div>
 

        </div>
    )
}

export default Form