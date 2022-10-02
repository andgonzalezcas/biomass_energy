import { Fade } from "react-awesome-reveal";
import LayerTittle from "../components/LayerTittle";

const Home = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center bg-orange-fall overflow-x-auto gap-5 pb-10">
      <LayerTittle title={'HOME PAGE'} />
      <Fade duration={500}>
        {/* section 1 */}
        <section className="bg-opacity-50 bg-gray-900 grid max-w-screen-xl w-[90vw] px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-3 rounded-md">
          <div className="mt-0 flex w-full justify-center items-center">
            <img className="max-w-sm" src={require('../images/unal_logo.png')} alt="unal logo" />
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
        {/* section 2 */}
        <section className="bg-opacity-50 bg-gray-900 grid max-w-screen-xl w-[90vw] px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-3 rounded-md">
          <div className="place-self-center lg:col-span-2">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
              Arbol de problemas
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl text-justify">
              Somos un grupo de trabajo creado en la materia Taller de proyectos interdiciplinarios de la Universidad Nacional de colombia.
            </p>
          </div>
          <div className="mt-0 flex w-full justify-center items-center">
            <img className="max-w-sm" src={require('../images/unal_logo.png')} alt="unal logo" />
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