import LayerTittle from "../components/LayerTittle"

const Graph = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center bg-orange-fall overflow-x-auto gap-5 pb-10">
      <LayerTittle title={'Graphs'} />
      <div className="grid">
        <h1>Arbol de problemas</h1>
      </div>
    </div>
  )
}

export default Graph