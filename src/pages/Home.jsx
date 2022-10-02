import { Fade } from "react-awesome-reveal";
import LayerTittle from "../components/LayerTittle";

const Home = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center bg-orange-fall overflow-x-auto gap-5 pb-10">
      <LayerTittle title={'HOME PAGE'} />
      <Fade duration={600}>
        {/* section Quienes somos */}
        <section className="bg-opacity-50 bg-gray-900 grid max-w-screen-xl w-[90vw] px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-3 rounded-md">
          <div className="mt-0 flex w-full justify-center items-center">
            <img className="max-w-sm w-full" src={require('../images/unal_logo.png')} alt="unal logo" />
          </div>
          <div className="place-self-center lg:col-span-2">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
              ¿Quienes somos?
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl text-justify">
              Somos un grupo de trabajo creado en la materia Taller de proyectos interdiciplinarios de la Universidad Nacional de colombia.
            </p>
          </div>
        </section>
        {/* section Arbol de problemas */}
        <section className="bg-opacity-50 bg-gray-900 grid max-w-screen-xl w-[90vw] px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 rounded-md">
          <div className="mt-0 flex flex-col w-full justify-center items-center text-center">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
              Arbol de problemas
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-opacity-50 bg-gray-900 rounded-md p-10">
              <h2 className="max-w-1xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl text-white md:col-span-2 lg:col-span-3">
                PRINCIPALES PROBLEMAS
              </h2>
              <p className="w-full mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl">
                Gasto de dinero en la recolección de pastos de la unal
              </p>
              <p className="w-full mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl">
                Acumulación de residuos de poda en instalaciones de la universidad
              </p>
              <p className="w-full mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl">
                Generación de plagas en los montículos de poda
              </p>
              <p className="w-full mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl">
                Generación de malos olores en el barrio Rafael Nuñez
              </p>
              <p className="w-full mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl">
                Gasto masivo de energía de en el invernadero de ciencias agrarias
              </p>
              <p className="w-full mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl">
                Gasto de dinero en el pago del recibo de la luz de la universidad
              </p>
              <p className="w-full mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl">
                Propagación de enfermedades debido a los malos olores generados
              </p>
              <p className="w-full mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl">
                No se sabe qué hacer con el pasto
              </p>
              <p className="w-full mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl">
                Generación de Lixiviados en los montículos
              </p>
              <p className="mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl lg:col-span-3 bg-opacity-50 bg-gray-900 rounded-md p-10">
                Acumulación masiva de residuos de poda en instalaciones de la Universidad Nacional de Colombia
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 bg-opacity-50 bg-gray-900 rounded-md p-10 mt-2">
              <h2 className="max-w-1xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl text-white md:col-span-2 lg:col-start-3">
                CONSECUENCIAS
              </h2>
              <p className="mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl lg:row-start-1">
                Generación de Lixiviados en los montículos
              </p>
              <p className="mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl lg:row-start-1">
                Propagación de enfermedades
              </p>
              <p className="mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl">
                Generación de malos olores en el barrio Rafael Nuñez
              </p>
              <p className="mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl">
                Generación de plagas en los montículos de poda
              </p>
              <p className="mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl">
                Gasto de dinero en el transporte de los pastos por fuera de la universidad
              </p>
              <p className="mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl">
                Desaprovechamiento del espacio de la universidad
              </p>
              <p className="mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl lg:col-span-2 bg-opacity-50 bg-gray-900 rounded-md p-10">
                Acumulación masiva de residuos de poda en instalaciones de la Universidad Nacional de Colombia
              </p>
              <p className="mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl lg:col-span-2 bg-opacity-50 bg-gray-900 rounded-md p-10">
                ¿Qué se puede hacer con los residuos de poda generados en la Universidad Nacional de Colombia, Sede Bogotá?
              </p>
              <h2 className="max-w-1xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl text-white md:col-span-2 lg:col-start-3">
                CAUSAS
              </h2>
              <p className="mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl lg:row-start-4">
                Poda de las 76 hectáreas correspondientes a las zonas verdes
              </p>
              <p className="mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl lg:row-start-4 lg:col-span-2">
                Baja utilización de residuos de poda en el centro de compostaje
              </p>
              <p className="mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl lg:row-start-4">
                Baja porción de los pastos se saca de la universidad para su desecho
              </p>
              <p className="mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl lg:col-span-2 lg:row-start-5">
                Crecimiento de pastos
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full bg-opacity-50 bg-gray-900 rounded-md p-10 mt-2">
              <h2 className="max-w-1xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl text-white md:col-span-2 lg:col-span-3">
                IDENTIFICACIÓN DE ACTORES
              </h2>
              <p className="mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl">
                OGA (Oficina de Gestión ambiental)
              </p>
              <p className="mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl">
                Residentes del barrio Rafael Nuñez
              </p>
              <p className="mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl">
                Personas de logística (poda, recolección)
              </p>
              <p className="mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl">
                Comunidad universitaria
              </p>
              <p className="mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl">
                Trabajadores del centro de compostaje
              </p>
              <p className="mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl">
                Aseo Bogotá
              </p>
              <p className="mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl">
                Tesorería Unal
              </p>
              <p className="mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl">
                Grupo de investigación Biot
              </p>
            </div>
          </div>
        </section>
        {/* section 3 */}
        <section className="bg-opacity-50 bg-gray-900 grid max-w-screen-xl w-[90vw] px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-3 rounded-md">
          <div className="mt-0 flex w-full justify-center items-center">
            <img className="max-w-sm" src={require('../images/unal_logo.png')} alt="unal logo" />
          </div>
          <div className="place-self-center lg:col-span-2">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
              ¿Cuanto dinero gasta la UN?
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl text-justify">
              En el articulo biodigestores para el analisis del potencial para biomasas en la Universidad Nacional - "representando un gasto
              económico de 120 millones de pesos para la Universidad entre los meses de enero y
              septiembre del 2021"
            </p>
          </div>
        </section>
        {/* section 4 */}
        <section className="bg-opacity-50 bg-gray-900 grid max-w-screen-xl w-[90vw] px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-3 rounded-md">
          <div className="place-self-center lg:col-span-2">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
              ¿Quienes somos?
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl text-justify">
              Somos un grupo de trabajo creado en la materia Taller de proyectos interdiciplinarios de la Universidad Nacional de colombia.
            </p>
          </div>
          <div className="mt-0 flex w-full justify-center items-center">
            <img className="max-w-sm" src={require('../images/unal_logo.png')} alt="unal logo" />
          </div>
        </section>
      </Fade>
    </div>
  )
};

export default Home;