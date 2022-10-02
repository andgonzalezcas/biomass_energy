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
      {
        "image": "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/Carrousel/carrousel1.png",
        "title": "PLAY2EARN IMPLEMENTATIONS",
        "content": "Metaverse game development, Play2Earn implementations, Engagement Models for communities"
      },
      {
        "image": "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/Carrousel/carrousel2.png",
        "title": "POSSIBILITY TO BUILD IN ANY METAVERSE",
        "content": "Metaverse design in various metaverses such as Decentraland, The Sandbox and Somnium Space. Development of tools for Metaverses like an editor for Decentraland (dcl-edit)."
      },
      {
        "image": "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/Carrousel/carrousel3.png",
        "title": "MODELLING OF UNIQUE ASSETS FOR CUSTOM EXPERIENCES",
        "content": "We have expert modellers working with state-of-the art tools like Blender and Fusion 360 that are able to create 3D models for Metaverses like Decentraland and Somnium Space."
      },
      {
        "image": "https://mgh-webside-assets.s3.eu-central-1.amazonaws.com/Images/Carrousel/carrousel4.png",
        "title": "MODERN 3D ENGINES",
        "content": "We have Unity 3D developers and programmers with years of experience in App development and game development. We can leverage these skills for any Metaverse project that allows for coding custom complex logic like Decentraland."
      }
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