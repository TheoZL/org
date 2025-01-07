import "./Form.css";
import { TextBox } from "../TextBox/TextBox";
import { DropdownList } from "../DropdownList/DropdownList";
import { Button } from "../Button/Button";
import { useState } from "react";

export const Form = (props) => {

    const [name, updateName] = useState("")
    const [position, updatePosition] = useState("")
    const [photo, updatePhoto] = useState("") 
    const [team, updateTeam] = useState("")

    const [title, updateTitle] = useState("") 
    const [color, updateColor] = useState("") 

    const {teammateRegister,createTeam} = props

    const inputData = (e) => {
        e.preventDefault()
        console.log("Data control")
        let dataToSend = {
            name,
            position,
            photo,
            team
        }
        teammateRegister(dataToSend)
    }

    const inputNewTeam = (e) =>{
        e.preventDefault()
        createTeam({title, mainColor:color})
    } 


    return <section className="form_title">
        <form className="form_box" onSubmit={inputData}>
            <h2 className="form_h2">Rellena el formulario para crear el colaborador.</h2>
            <TextBox 
                title="Nombre" 
                placeholder="Ingresar Nombre" 
                required value={name} 
                updateValue={updateName}/>
            <TextBox 
                title="Puesto" 
                placeholder="Indicar Puesto"
                required value={position} 
                updateValue={updatePosition}/>
            <TextBox 
                title="Foto" 
                placeholder="Agregar link de la foto" 
                required value={photo} 
                updateValue={updatePhoto}/>
            <DropdownList required 
                value={team} 
                updateTeam={updateTeam}
                teams={props.teams}
                />
            <Button>Crear</Button>
        </form>
        <form className="form_box" onSubmit={inputNewTeam}>
            <h2 className="form_h2">Completa el formulario para crear un equipo nuevo.</h2>
            <TextBox 
                title="Nombre de Equipo" 
                placeholder="Ingresar Nombre" 
                required value={title}
                updateValue={updateTitle}
            />
            <TextBox 
                title="Color" 
                placeholder="Indicar el color en Hexadecimal"
                required value={color} 
                updateValue={updateColor}
                type="color"
            />
            <Button>Crear Equipo</Button>
        </form>
    </section>
}

