import {
  CircleMenu,
  CircleMenuItem,
} from "react-circular-menu";

import { AiOutlineTeam } from 'react-icons/ai'
import { BsFillFileEarmarkBarGraphFill } from 'react-icons/bs'
import { FiPackage } from 'react-icons/fi'
import { GiGreenPower, GiBookmark, GiSandsOfTime } from 'react-icons/gi'
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-mushromm">
      <CircleMenu
        startAngle={-90}
        rotationAngle={360}
        itemSize={5}
        radius={8}
        rotationAngleInclusive={false}
      >
        <CircleMenuItem
          tooltip={'Biomass Energy'}
          style={{ background: '#456625' }}
        >
          <Link to="/home" className="w-28 h-28 flex justify-center items-center rounded-full">
            <GiGreenPower className="w-12 h-12" />
          </Link>
        </CircleMenuItem>
        <CircleMenuItem
          tooltip={'Pestel Analysis'}
          style={{ background: '#456625' }}
        >
          <Link to={'/pestal-analysis'} className="w-28 h-28 flex justify-center items-center rounded-full">
            <BsFillFileEarmarkBarGraphFill className="w-12 h-12" />
          </Link>
        </CircleMenuItem >
        <CircleMenuItem
          tooltip={'Expertos'}
          style={{ background: '#456625' }}
        >
          <Link to={'/experts'} className="w-28 h-28 flex justify-center items-center rounded-full">
            <GiBookmark className="w-12 h-12" />
          </Link>
        </CircleMenuItem>
        <CircleMenuItem
          tooltip={'Team'}
          style={{ background: '#7f9b2e' }}
        >
          <Link to="/team" className="w-28 h-28 flex justify-center items-center rounded-full">
            <AiOutlineTeam className="w-12 h-12" />
          </Link>
        </CircleMenuItem>
        <CircleMenuItem
          tooltip={'Antecedentes'}
          style={{ background: '#7f9b2e' }}
        >
          <Link to="/history" className="w-28 h-28 flex justify-center items-center rounded-full">
            <GiSandsOfTime className="w-12 h-12" />
          </Link>
        </CircleMenuItem>
        <CircleMenuItem
          tooltip={'Posibles soluciones'}
          style={{ background: '#7f9b2e' }}
        >
          <Link to="/solutions" className="w-28 h-28 flex justify-center items-center rounded-full">
            <FiPackage className="w-12 h-12" />
          </Link>
        </CircleMenuItem>
      </CircleMenu>
    </div>
  )
}

export default App;
