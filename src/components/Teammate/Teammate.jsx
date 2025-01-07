import "./Teammate.css";
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export const Teammate = (props) => {

    const {name,position,photo, team, id, fav} = props.data
    const {mainColor, teammateDelete, like} = props

    return <div className="teammates">
        <AiFillCloseCircle className="delete" onClick={() => teammateDelete(id)}/>
        <div className="head" style={{backgroundColor:mainColor}}>
            <img className="img" src={photo} alt={name}/>
        </div>
        <div className="info">
            <h4>{name}</h4>
            <h5>{position}</h5>
            {fav ? <AiFillHeart color="red" onClick={()=> like(id)}/> : <AiOutlineHeart onClick={()=> like(id)}/>}
        </div>
    </div>
}