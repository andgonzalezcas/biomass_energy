import { GiGreenPower } from 'react-icons/gi'
import { Link } from 'react-router-dom'

const LayerTittle = ({title}) => {
  return (
    <nav className="border-gray-200 bg-gray-900 w-full bg-opacity-80">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        <Link className="flex items-center" to="/">
          <GiGreenPower className='mr-3 h-6 w-6 sm:h-9 sm:w-9 text-white'/>
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">BIOMASS ENERGY</span>
        </Link>
        <div className="flex items-center">
          <p className="mr-6 text-xl font-semibold text-white">{title}</p>
        </div>
      </div>
    </nav>
  )
}

export default LayerTittle