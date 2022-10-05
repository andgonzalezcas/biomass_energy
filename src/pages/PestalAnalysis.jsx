import LayerTittle from "../components/LayerTittle"

const PestalAnalysis = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center bg-sunrise-mountains overflow-x-auto gap-5 pb-10">
      <LayerTittle title={'PESTAL ANALYSIS'} />
      <div className="bg-opacity-50 bg-gray-900 max-w-screen-xl w-[90vw] px-4 pt-8 pb-4 mx-auto lg:gap-8 xl:gap-0 lg:pt-16 rounded-md justify-center items-center text-center" >
        <h1 className="max-w-2xl mb-4 text-4xl mx-auto font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
          MATRIZ PESTEL
        </h1>
        <div className="grid bg-opacity-50 bg-gray-900 rounded-md">
          <div className="grid grid-cols-1 gap-8 pt-10 px-2 h-full">
            <h2 className="max-w-1xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl text-white">
              Político
            </h2>
            <div className="mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl bg-opacity-50 bg-gray-900 rounded-md py-10 px-2 text-justify">
              Los ministerios de Minas, Desarrollo y de Medio Ambiente están interesados en el aprovechamiento de residuos sólidos a través del apoyo de propuestas
              <ul className="list-disc pl-6">
                <li>
                  El Ministerio de Desarrollo y la Comisión Reguladora de Agua Potable apoyarán Proyectos Piloto de reciclaje de residuos sólidos y el Programa Nacional de Residuos Sólidos
                </li>
                <li>
                  Con el Ministerio de Minas y Energía y su Plan Energético Nacional se evaluarán y analizarán las propuestas para la Incineración con recuperación de Energía de los residuos sólidos generados en un municipio
                </li>
                <li>
                  En el 2002, el Ministerio de Ambiente y Desarrollo Sostenible de la mano del Ministerio de Educación expidió La Política Nacional de Educación Ambiental Esta política estableció en el capítulo VI. ESTRATEGIAS Y RETOS, la necesidad del país de “Desarrollar programas de actualización y formación en temas ambientales prioritarios para los funcionarios vinculados al Sistema Nacional Ambiental con los que se impulsen estrategias educativas para el manejo integral de residuos sólidos” (Ministerio del Medio Ambiente; Ministerio de Educación Nacional, 2002)
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 pt-10 px-2 h-full">
            <h2 className="max-w-1xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl text-white">
              Económico
            </h2>
            <div className="mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl bg-opacity-50 bg-gray-900 rounded-md py-10 px-2 text-justify">
              <ul className="list-disc pl-6">
                <li>
                  Los residuos de biomasa (residuos orgánicos) ofrecen mayores oportunidades para el desarrollo de nuevos modelos de negocio que promueven la economía circular En el sector agrícola
                </li>
                <li>
                  La logística detrás de la recolección de los desechos orgánicos cuesta dependiendo de la cantidad de residuos que se produzcan
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 pt-10 px-2">
            <h2 className="max-w-1xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl text-white">
              Social
            </h2>
            <div className="mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl bg-opacity-50 bg-gray-900 rounded-md py-10 px-2 text-justify">
              El aprovechamiento de los residuos orgánicos se ha adaptado progresivamente por las personas.
              <ul className="list-disc pl-6">
                <li>
                  Las acumulaciones de basura son focos de malos olores y de plagas
                </li>
                <li>
                  El aprovechamiento de los residuos orgánicos se está convirtiendo parte del estilo de vida de algunas personas
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 pt-10 px-2">
            <h2 className="max-w-1xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl text-white">
              Tecnológico
            </h2>
            <div className="mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl bg-opacity-50 bg-gray-900 rounded-md py-10 px-2 text-justify">
              Actualmente existen diferentes procesos de transformación como los procesos termoquímicos, bioquímicos y compost.
              <ul className="list-disc pl-6">
                <li>
                  Transformación de residuos orgánicos en abono para plantas a partir del compostaje
                </li>
                <li>
                  Los sistemas de biodigestión que convierte los residuos orgánicos en combustibles gasificado como el metano para suplir una demanda energética está siendo implementado
                </li>
                <li>
                  Dependiendo del desecho puede aprovecharse de manera termoquímica con métodos de combustión sin oxígeno para aprovechar la formación química de este.
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 pt-10 px-2">
            <h2 className="max-w-1xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl text-white">
              Ambiental
            </h2>
            <div className="mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl bg-opacity-50 bg-gray-900 rounded-md py-10 px-2 text-justify">
              <ul className="list-disc pl-6">
                <li>
                  La estabilización de las concentraciones de gases de efecto invernadero en la atmósfera a un nivel que impida interferencias antropógenos peligrosas en el sistema climático. Ese nivel debería lograrse en un plazo suficiente para permitir que los ecosistemas se adapten naturalmente al cambio climático
                </li>
                <li>
                  Así, para el año 2017 se expide la Ley 1844 de 2017 “Por medio de la cual se aprueba el “Acuerdo de París”, con la cual Colombia inicialmente se comprometió a: (i) Reducir el 20% de sus emisiones de Gases de Efecto Invernadero (GEI) para 2030
                </li>
                <li>
                  El Ministerio de Ambiente y Desarrollo Sostenible (MADS) estableció en el Decreto 2041 de 2014 que la construcción y operación de plantas cuyo objeto sea el tratamiento de residuos sólidos orgánicos biodegradables mayores o iguales a veinte mil (20.000) toneladas/año, requieren de licencia ambiental expedida por la Corporación Autónoma regional competente. Para el tratamiento térmico de residuos no peligrosos, el Ministerio de Ambiente y Desarrollo territorial establece en la Resolución 909 de 2008 los estándares de emisión admisibles de contaminantes al aire para dichas instalaciones en el artículo articulo 54 y 55
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 pt-10 px-2">
            <h2 className="max-w-1xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl text-white">
              Legislativo
            </h2>
            <div className="mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl bg-opacity-50 bg-gray-900 rounded-md py-10 px-2 text-justify">
              El Gobierno de Colombia apoya los proyectos de reciclaje, así como la concientización ambiental en entidades escolares.
              <ul className="list-disc pl-6">
                <li>
                  Apoyar logísticamente a los proyectos piloto de reciclaje de residuos sólidos dentro de lo establecido en la ley 142 de 1994 y la Comisión Reguladora de Agua Potable y Saneamiento Básico
                </li>
                <li>
                  En el año 2015 entró en vigor la Ley 1549, por medio de la cual se fortaleció la institucionalización de la Política Nacional de Educación Ambiental y su incorporación efectiva en el desarrollo territorial. El artículo 8 de esta Ley concerniente a los Proyectos Escolares Ambientales (PRAE), impulsa a las entidades escolares a incorporar en sus currículos el desarrollo de proyectos concretos orientados a temáticas como la gestión de residuos sólidos, biodiversidad, agua, gestión del riesgo y manejo del suelo
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PestalAnalysis