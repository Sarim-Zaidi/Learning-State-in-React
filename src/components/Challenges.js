import  React, {use, useState} from "react"
import Count from "./Count"
import Star from "./Star"
import Child1 from "./Child1"
import Child2 from "./Child2"
import boxdata from "./boxdata"
import Box from "./Box"
import data from './meme'
import meme from "./meme"

function Challenge()
{

    const userkanaam = useState("Zaidi")

    const result = useState("HelloHi")    // GETTING THE RESULT FROM USESTATE
                                         // AS AN ARRAY IN THE VARIABLE RESULT
    console.log(result)
    let check = "true"
    const [recieve, setRecieve] = useState("Recieved")
    console.log(recieve)    //Destructuring the array and storing the index of
                            //Array in 2 different variables
            function onclick() {
                setRecieve("notRecieved")
                console.log(recieve)
                check = "false"
                        }          
                        
            const [counter, setcounter] = useState(0)

            function increase() {
                // aese b ho skta hai
                console.log("increase")
                setcounter(counter + 1)
            }
            function decrease() {
                // aese b kr skte hai
                setcounter(Prevcounter => Prevcounter - 1)
            }

            const [ThingsArray, setThingsArray] = useState(["thing 1, ","thing 2, "])

            function updateArray() {
                let size = ThingsArray.length + 1
                let thing = `Thing ` +  size  +`, `
                // setThingsArray(preevarray => preevarray.push('thing '+ {preevarray.length + 1} + ", "))
                setThingsArray(preevarray => [...preevarray, thing])
            }

            const [info, setInfo] = useState({
                Name: "Sarim",
                LName: "Zaidi",
                Phone: '03338396560',
                email: "syedsarimxaidi@gmail.com",
                Isfvrt: false
            })

            function Favourite() {
                setInfo(prev => {
                    return{
                    ...prev, Isfvrt: !prev.Isfvrt
                }})
            }

            
            
            console.log("asadadada")
            const [box, setbox] = useState(boxdata)
            

            // const style2 = {
            //     backgroundColor: "Black"
            // }
            const printBox = box.map(singlebox =>(
                    <Box 
                        IsOn = {singlebox.on} 
                        id = {singlebox.id} 
                        handleClick = {clickHua}
                    />
                    
                ))

                function clickHua(id) {

                    console.log(id)
                    
                    setbox(prevbox => {
                         return prevbox.map((dabba) =>{
                          return dabba.id === id ? {...dabba, on: !dabba.on}: dabba
                         })
                        })
                    
                }


                const [IsShown, setshow] = useState(true)
                const [showMeme, setMeme] = useState(data)
                let show = ""
            function change()
            {
                console.log(IsShown)
                setshow(!IsShown)
                // if(IsShown){show = "ye lat"}
                // const id = Math.random() * data.length
                // if(IsShown){  setMeme(meme =>{
                //     return meme.map(me =>{
                //     return    me.id === id ? {...me, text: me.text} : me
                //     })
                // }
                    
                // ) }
            }
            
            // let select= 0
            // if(IsShown)
            // {
            //      select = Math.random()*data.length
            //      showMeme = data[select].text
            // }
            // console.log(data[select].text)
            // const showMeme = IsShown === true  ? {data[Math.random()*data.length()].text} : 'nothing' 
            
    return(                 
        <div>
            <h1>Learning about State</h1>
            <button onClick={onclick}>Click Me</button>
            <h1>{recieve}</h1>

            {/* <Count counter /> */}
            <div className="counter">
                <span className="plus" onClick={decrease}>-</span>
                {/* <h1 className="count">
                    {counter}

                </h1> */}
                
                 <Count number={counter}/>
                <span className="minus" onClick={increase}>+</span>
            </div>

            <div className="array">
                <h1>{ThingsArray}</h1>
                <button onClick={updateArray}>Update Array</button>
            </div>

            <div className="info">
                <Star isFilled = {info.Isfvrt}/>
                <h2>Name     : {info.Name}</h2>
                <h2>Last Name: {info.LName}</h2>
                <h2>Phone #  : {info.Phone}</h2>
                <h2>Email    : {info.email}</h2>
                <h2>Favourite: {info.Isfvrt === true ? "Yes" :"Nope"}</h2>

                <button onClick={Favourite}>Change Fvrt</button>
            </div>

            <h2><Child1 naam ={userkanaam}/>
            <Child2 name = {userkanaam}/></h2>
                    <hr></hr><br></br>
            <main>
                <h1 className="print">Click on Boxes!</h1>
                
            {printBox}  


            </main>

            <div>
                <button onClick = {change}>Change True or False</button>
                <h1>{IsShown && <p>chal b jao</p>}</h1>
            </div>
        </div>
    )
    // function greeting(name)
    // {
    //     const date = new Date()
    //     const hours = date.getHours()
    //     let greet
    //     if(hours < 12 && hours > 4)
    //     {
    //         greet = "Morning"
    //     }
    //     else if(hours > 12 && hours < 17)
    //     {
    //         greet = "Afternoon"
    //     }
    //     else if(hours > 17 && hours < 20)
    //     {
    //         greet = "Evening"
    //     }
    //     else{
    //         greet = "Night"
    //     }

    //     console.log("Good "+greet+", "+ name)
    // }
    // greeting("Zaidi")
}

export default Challenge