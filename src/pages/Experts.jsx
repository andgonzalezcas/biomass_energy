import ExpertCard from "../components/ExpertCard"
import LayerTittle from "../components/LayerTittle"

const data = [
  {
    name: 'Sebastián Achury Ortiz',
    carge: 'Ingeniero mecánico',
    from: 'Universidad Nacional de Colombia',
    description: ''
  }
]

const Experts = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center bg-orange-fall overflow-x-auto gap-5 pb-10">
      <LayerTittle title={'Expertos'}/>
      {
        data.map((expert, index) => {
          return <ExpertCard key={index} name={expert.name} carge={expert.carge} from={expert.from} description={expert.description}/>
        })
      }
    </div>
  )
}

export default Experts