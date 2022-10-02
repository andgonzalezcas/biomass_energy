import Carrousel from "../components/Carrousel"
import ExpertCard from "../components/ExpertCard"
import LayerTittle from "../components/LayerTittle"

const data = [
  {
    name: 'Sebastián Achury Ortiz',
    carge: 'Ingeniero mecánico',
    from: 'Universidad Nacional de Colombia',
    description: 'Nos ayudo en la carectarizacion de humedad y ceniza con tres muestras diferentes de pastos que se recolecto en diferentes partes de la universidad, ademas ayuda con los calculos para saber cuanto pasto se necesita para hacer funcionar un biodigestor o un gasificador.',
    dataCarrousel: [
      { "image": require('../images/experts/sebastian_achury/sebastian_achury_1.jpeg'), },
      { "image": require('../images/experts/sebastian_achury/sebastian_achury_2.jpeg'), },
      { "image": require('../images/experts/sebastian_achury/sebastian_achury_3.jpeg'), },
      { "image": require('../images/experts/sebastian_achury/sebastian_achury_4.jpeg'), },
      { "image": require('../images/experts/sebastian_achury/sebastian_achury_5.jpeg'), },
      { "image": require('../images/experts/sebastian_achury/sebastian_achury_6.jpeg'), },
      { "image": require('../images/experts/sebastian_achury/sebastian_achury_7.jpeg'), },
    ]
  }
]

const Experts = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center bg-moon overflow-x-auto gap-5 pb-10">
      <LayerTittle title={'Expertos'} />
      {
        data.map((expert, index) => {
          return <ExpertCard
            key={index}
            name={expert.name}
            carge={expert.carge}
            from={expert.from}
            description={expert.description}
            dataCarrousel={expert.dataCarrousel}
          />
        })
      }
    </div>
  )
}

export default Experts