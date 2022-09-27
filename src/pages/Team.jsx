import CardProfile from "../components/CardProfile"

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
    rolFull: 'Chief Communications Officer',
    image: require('../images/profiles/Santiago.png')
  },
  {
    name: 'USER3',
    career: 'CAREER3',
    rol: 'CFO',
    rolFull: 'Chief Financial Officer'
  },
  {
    name: 'USER4',
    career: 'CAREER4',
    rol: 'CEO',
    rolFull: 'Chief Executive Officer'
  },
  {
    name: 'USER5',
    career: 'CAREER5',
    rol: 'COO',
    rolFull: 'Chief Operating Officer'
  },
  {
    name: 'USER6',
    career: 'CAREER6',
    rol: 'CTO',
    rolFull: 'Chief Technology Officer'
  }
]

const Team = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center bg-hydrangeas overflow-x-auto gap-5 p-10">
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
    </div>
  )
}

export default Team