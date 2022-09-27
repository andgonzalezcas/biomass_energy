import {
  CircleMenu,
  CircleMenuItem,
} from "react-circular-menu";

import { AiOutlineTeam } from 'react-icons/ai'
import { BiHomeAlt } from 'react-icons/bi'
import { FiPackage } from 'react-icons/fi'
import { GiGreenPower } from 'react-icons/gi'
import { TbNorthStar } from 'react-icons/tb'
import { WiAlien } from 'react-icons/wi'
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
          <Link to="/home">
            <GiGreenPower className="w-10 h-10" />
          </Link>
        </CircleMenuItem>
        <CircleMenuItem
          tooltip={'North'}
          style={{ background: '#456625' }}
        >
          <TbNorthStar className="w-10 h-10" />
        </CircleMenuItem >
        <CircleMenuItem
          tooltip={'Alien mi so'}
          style={{ background: '#7f9b2e' }}
        >
          <WiAlien className="w-10 h-10" />
        </CircleMenuItem>
        <CircleMenuItem
          tooltip={'Team'}
          style={{ background: '#7f9b2e' }}
        >
          <Link to="/team">
            <AiOutlineTeam className="w-10 h-10" />
          </Link>
        </CircleMenuItem>
        <CircleMenuItem
          tooltip={'Casita por que aja'}
          style={{ background: '#456625' }}
        >
          <BiHomeAlt className="w-10 h-10" />
        </CircleMenuItem>
        <CircleMenuItem
          tooltip={'Home'}
          style={{ background: '#7f9b2e' }}
        >
          <FiPackage className="w-10 h-10" />
        </CircleMenuItem>
      </CircleMenu>
    </div>
  )
}

export default App;
