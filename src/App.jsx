
import { useState } from "react";
import { v4 as uuid} from "uuid";
import { Header} from "./components";
import { Form } from "./components";
import { Org } from "./components";
import { Team } from "./components";
import { Footer } from "./components";

import './App.css'

function App() {

  const [showForm, updateView] = useState(false)
  const [teammates, updateTeammates] = useState([{
    id: uuid(),
    name:"Theo Zuñiga ",
    photo:"https://github.com/TheoZL.png",
    position:"Developer",
    team:"Front End",
    fav: true
  },
  {
    id: uuid(),
    name:"Luis Carlos Porras",
    photo:"https://github.com/luiskacr.png",
    position:"Developer",
    team:"Programación",
    fav: false
  },
  {
    id: uuid(),
    name:"Samus Aran",
    photo:"https://www.egames.news/__export/1685829139596/sites/debate/img/2023/06/03/ia-samus-aran-zero-metroid-live-action.jpg_1902800913.jpg",
    position:"Manager",
    team:"UX & Design",
    fav: false
  },
  {
    id: uuid(),
    name:"Jin Sakai",
    photo:"https://img.freepik.com/premium-photo/awful-jin-sakai-ghost-tsushima-isolated-white-background_787273-11969.jpg",
    position:"Manager",
    team:"Programación",
    fav: false
  },
  {
    id: uuid(),
    name:"Bayonetta",
    photo:"https://i.pinimg.com/736x/65/53/9c/65539c4988f65829688946f40ad6bb1f.jpg",
    position:"Manager",
    team:"Front End",
    fav: false
  }])
  const [teams, updateTeams] = useState([
    {
      id: uuid(),
      title:"Programación",
      mainColor: "#57C278",
      secondColor: "#D9F7E9"
    },
    {
      id: uuid(),
      title:"Front End",
      mainColor: "#82CFFA",
      secondColor: "#E8F8FF"
    },
    {
      id: uuid(),
      title:"Data Science",
      mainColor: "#A6D157",
      secondColor: "#F0F8E2"
    },
    {
      id: uuid(),
      title:"Devops",
      mainColor: "#E06B69",
      secondColor: "#FDE7E8"
    },
    {
      id: uuid(),
      title:"UX & Design",
      mainColor: "#DB6EBF",
      secondColor: "#FAE9F5"
    },
    {
      id: uuid(),
      title:"Móvil",
      mainColor: "#FFBA05",
      secondColor: "#FFF5D9"
    },
    {
      id: uuid(),
      title:"Inovación & Gestión",
      mainColor: "#FF8A29",
      secondColor: "#FFEEDF"
    },
  ])

  const changeView = () =>{
    updateView(!showForm)
  }

  // 1. Ternario --> condition ?, show : noShow
  // 2. condition && show

  // Teammate register

  const teammateRegister = (teammate) =>{
    //Spread operator
    updateTeammates([...teammates,teammate])
  }

  // create team
  const createTeam = (newTeam) =>{
    console.log(newTeam)
    updateTeams([...teams, {...newTeam, id:uuid()}])
  }

  // add like to the teammates
  const like = (id) => {
    const updatedTeammates = teammates.map((teammate) => {
      if (teammate.id === id){
        teammate.fav = !teammate.fav
      }
      return teammate
    }) 
      updateTeammates(updatedTeammates)
  }

  //teammate delete
  const teammateDelete = (id) =>{
    console.log("Eliminar colaborador", id)
    const newTeammates = teammates.filter((teammate)=> teammate.id !== id)
    updateTeammates(newTeammates)
  }

  //Update team color
  const updateTeamColor = (color, id) => {

      const updatedTeams = teams.map( (team) => {
        if (team.id === id){
            team.mainColor = color
        }
        return team
      }) 
      updateTeams(updatedTeams)
  }

  return(
    <>
    <div>
      <Header/>
      {/* 1. {showForm ? <Form/> : <></>} */}
      {showForm && <Form 
        teams={teams.map ((team) => team.title)}
        teammateRegister={teammateRegister}
        createTeam ={createTeam}
        />
      } 
      <Org changeView={changeView}
      />
      {
        teams.map( (team) => <Team 
        data={team} key={team.title}
        teammates={teammates.filter(teammate => teammate.team === team.title)}
        teammateDelete={teammateDelete}
        updateTeamColor={updateTeamColor}
        like={like}
        />)
      }
      <Footer/>
    </div>
    </>
  )
}
export default App
