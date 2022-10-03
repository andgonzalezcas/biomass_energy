import { Fade } from "react-awesome-reveal"

import CardProfile from "../components/CardProfile"
import LayerTittle from "../components/LayerTittle"

const TEAM_DATA = [
  {
    name: 'Camilo Andres Gonzalez Castro',
    career: 'Ingenieria de Sistemas y computación',
    rol: 'CMO',
    rolFull: 'Chief Marketing Officer'
  },
  {
    name: 'Santiago Dleon Sanchez Romero',
    career: 'Ingenieria Mecatronica',
    rol: 'CCO',
    rolFull: 'Chief Communications Officer'
  },
  {
    name: 'Carmen Lucia Cordoba Cleves',
    career: 'Ingenieria Agricola',
    rol: 'CFO',
    rolFull: 'Chief Financial Officer'
  },
  {
    name: 'Fabian Alfonso Hernandez Rodriguez',
    career: 'Ingenieria Mecanica',
    rol: 'CEO',
    rolFull: 'Chief Executive Officer'
  },
  {
    name: 'Juana Valentina Castillo Rojas',
    career: 'Ingenieria Mecanica',
    rol: 'COO',
    rolFull: 'Chief Operating Officer'
  },
  {
    name: 'Andres Camilo Paez Castillo',
    career: 'Ingenieria agricola',
    rol: 'CTO',
    rolFull: 'Chief Technology Officer'
  },
  {
    name: 'Fabio',
    career: 'Docente',
    rol: 'Docente',
    rolFull: 'Group Leader'
  }
]

const Team = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center bg-hydrangeas overflow-x-auto gap-5 pb-10">
      <LayerTittle title={'TEAM'} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Fade duration={500}>
          {
            TEAM_DATA.map((person, index) => {
              return <CardProfile
                name={person.name}
                career={person.career}
                rol={person.rol}
                rolFull={person.rolFull}
                skills={person.skills}
                key={index}
                image={person.image}
              />
            })
          }
        </Fade>

      </div>
    </div>
  )
}

export default Team