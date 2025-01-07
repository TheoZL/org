import "./DropdownList.css"

export const DropdownList = (props) => {

    //Map method -> array.map( (team, index)=> {
    //  return <option></option>
    //  } )


    const valueChange = (e) => {
        props.updateTeam(e.target.value)
    }

    return <div className="dropdownList">
        <label>Equipos</label>
        <select value= {props.value} onChange={valueChange}> 
            <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
           { props.teams.map((team, index)=> <option key={index} value={team}>{team}</option>)}
        </select>
    </div>
}