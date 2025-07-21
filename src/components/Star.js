import img from "../images/149220.png"
import img2 from "../images/276020.png"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Star(receiving)
{
    // text = ""
    // if (receiving.isFilled) {
    //     text = <div class="material-symbols-outlined">star</div>
    // }
    const halfstar = <img src={img} width='30px' height='30px' />
    const porastar = <img src={img2} width='30px' height='30px' />
    return(
        <article>{receiving.isFilled === true ? porastar: halfstar}</article>
    )
}

export default Star