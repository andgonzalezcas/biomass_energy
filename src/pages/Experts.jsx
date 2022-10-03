import ExpertCard from "../components/ExpertCard"
import LayerTittle from "../components/LayerTittle"

const data = [
  {
    name: 'Sebastián Achury Ortiz',
    carge: 'Ingeniero mecánico',
    from: 'Universidad Nacional de Colombia',
    description: 'Nos ayudo en la carectarizacion de humedad y ceniza, con tres muestras diferentes de pastos que se recolecto en diferentes partes de la universidad, ademas ayudo con los calculos para saber cuanto pasto se necesita al hacer funcionar un biodigestor o un gasificador.',
    dataCarrousel: [
      { "image": require('../images/experts/sebastian_achury/sebastian_achury_1.jpeg'), },
      { "image": require('../images/experts/sebastian_achury/sebastian_achury_2.jpeg'), },
      { "image": require('../images/experts/sebastian_achury/sebastian_achury_3.jpeg'), },
      { "image": require('../images/experts/sebastian_achury/sebastian_achury_4.jpeg'), },
      { "image": require('../images/experts/sebastian_achury/sebastian_achury_5.jpeg'), },
      { "image": require('../images/experts/sebastian_achury/sebastian_achury_6.jpeg'), },
      { "image": require('../images/experts/sebastian_achury/sebastian_achury_7.jpeg'), },
    ]
  },
  {
    name: "Eduan Ferney Segura Galindo",
    carge: 'Desarrollador Fullstack, experto en UI/UX y estudiante de ingenieria',
    from: 'Universidad Nacional de Colombia',
    description: 'Gracias a su conocimiento en User experience, logramos tener una pagina dinamica por medio de diferentes librerias sugeridas, ademas nos esta dando apoyo constante a la hora de realizar nuevas implementaciones en el front end.',
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