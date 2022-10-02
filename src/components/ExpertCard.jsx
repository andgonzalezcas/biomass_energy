import Carrousel from "./Carrousel"

const ExpertCard = ({name, carge, from, description, dataCarrousel}) => {
  return (
    <div className="p-16">
      <div className="p-8 bg-white shadow mt-24 bg-opacity-70 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="relative col-span-3 mb-10">
            <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-20 text-center border-b pb-12">
          <h1 className="text-4xl font-medium text-gray-700">{name}</h1>
          <p className="font-light text-gray-600 mt-3">{carge}</p>
          <p className="mt-8 text-gray-500">{from}</p>
        </div>
        <div className="mt-12 flex flex-col justify-center">
          <p className="text-gray-600 text-center font-light lg:px-16">{description}</p>
        </div>
        {
          dataCarrousel 
          ? (<Carrousel dataCarrousel={dataCarrousel}/>)
          : (<></>)
        }
      </div>
    </div>
  )
}

export default ExpertCard