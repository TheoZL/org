import "./Team.css";
import { Teammate } from "../Teammate/Teammate";
import hexToRgba from "hex-rgba";


export const Team = (props) => {

    //Destructuracion
    const {mainColor, secondColor, title, id} = props.data
    const {teammates, teammateDelete, updateTeamColor, like} = props
    const titleStyle = {borderColor: mainColor}

    const obj = {
        backgroundColor: hexToRgba(mainColor,60)
    }

    return <>
        { 
            teammates.length > 0 && 
            <section className="team" style={obj}>
                <input
                    className="input-color"
                    type="color"
                    value={mainColor}
                    onChange={(event) => {
                        updateTeamColor(event.target.value, id)
                    } }
                />
                <h3 style={titleStyle} >{title}</h3>
                <div className="teammatesCards"> 
                    {
                        teammates.map((teammate,index)=> <Teammate 
                            data={teammate} 
                            key={index} 
                            mainColor={mainColor}
                            teammateDelete={teammateDelete}
                            like={like}
                        />)
                    }
                </div>
            </section>
    }
    </>
}