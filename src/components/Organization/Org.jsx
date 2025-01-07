import "./Org.css";
import { useState } from "react";


export const Org = (props) => {

    //hooks
    //useState
    // useState()
    // const [variableName, description] = useState("Initialvalue")

    return <section className="orgSection">
        <h3 className="orgTitle">Mi Organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.changeView} />
    </section>
}