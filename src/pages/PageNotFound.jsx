import { Link } from "react-router-dom"
import LayerTittle from "../components/LayerTittle"

const PageNotFound = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center bg-orange-fall overflow-x-auto gap-5 pb-10">
      <LayerTittle title={'404: PAGE NOT FOUND'} />
      <section className="flex items-center h-full p-16 bg-gray-900 text-gray-100 rounded-md">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
            <p className="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
            <Link to={'/'} className="px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900">
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PageNotFound