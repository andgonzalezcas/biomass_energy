import { Fade } from "react-awesome-reveal";
import ProblemTree from "../components/Home/ProblemTree";
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
        {/* section 4 */}
        <section className="bg-opacity-50 bg-gray-900 grid max-w-screen-xl w-[90vw] px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-3 rounded-md">
          <div className="place-self-center lg:col-span-2">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
              ¿Pregunta Escencial?
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl text-justify">
              ¿Qué se puede hacer con los residuos de poda generados en la Universidad Nacional de Colombia, Sede Bogotá?
            </p>
          </div>
          <div className="mt-0 flex w-full justify-center items-center">
            <img className="max-w-[10rem] w-full" src={'https://img.icons8.com/metro/400/ffffff/biomass.png'} alt="unal logo" />
          </div>
        </section>
        {/* section Arbol de problemas */}
        <ProblemTree />
        {/* section dinero gastado en la UN */}
        <section className="bg-opacity-50 bg-gray-900 grid max-w-screen-xl w-[90vw] px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-3 rounded-md">
          <div className="mt-0 flex w-full justify-center items-center">
            <img className="max-w-[14rem] w-full" src="https://images.vexels.com/media/users/3/200981/isolated/preview/2018a0dd73f0f6d68a0e9d2c8bbdb984-mano-con-icono-de-dinero.png" alt="unal logo" />
          </div>
          <div className="place-self-center lg:col-span-2">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
              ¿Cuanto dinero gasta la UN?
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl text-justify">
              En el articulo biodigestores para el analisis del potencial para biomasas en la Universidad Nacional nos dicen que este problema esta: - "representando un gasto
              económico de 120 millones de pesos para la Universidad entre los meses de enero y
              septiembre del 2021"
            </p>
          </div>
        </section>
        <section className="bg-opacity-50 bg-gray-900 grid max-w-screen-xl w-[90vw] px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-3 rounded-md">
          <div className="mt-0 flex w-full justify-center items-center">
            <img className="max-w-sm w-full" src={require('../images/green-zones.png')} alt="unal logo" />
          </div>
          <div className="place-self-center lg:col-span-2">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
              Zonas verdes en la UN
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl text-justify">
              Áreas de zonas verdes en la sede Bogotá de la Universidad Nacional de Colombia ​Equivalentes a 76 hectáreas
            </p>
          </div>
        </section>
      </Fade>
    </div>
  )
};

export default Home;