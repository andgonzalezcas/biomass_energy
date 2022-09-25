import {
  CircleMenu,
  CircleMenuItem,
} from "react-circular-menu";

import { AiOutlineTeam } from 'react-icons/ai'
import { BiHomeAlt } from 'react-icons/bi'

//colors
//#121709
//#173814
//#456625
//#7f9b2e
//#cdd632

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
          onClick={() => alert("Clicked the item")}
          tooltip={'Home'}
          style={{ background: '#456625' }}
        >
          <BiHomeAlt className="w-10 h-10"/>
        </CircleMenuItem>
        <CircleMenuItem
          onClick={() => alert("Clicked the item")}
          tooltip={'Team'}
          style={{ background: '#7f9b2e' }}
        >
          <AiOutlineTeam className="w-10 h-10"/>
        </CircleMenuItem>
        <CircleMenuItem
          onClick={() => alert("Clicked the item")}
          tooltip={'Home'}
          style={{ background: '#456625' }}
        >
          A
        </CircleMenuItem>
        <CircleMenuItem
          onClick={() => alert("Clicked the item")}
          tooltip={'Home'}
          style={{ background: '#7f9b2e' }}
        >
          A
        </CircleMenuItem>
        <CircleMenuItem
          onClick={() => alert("Clicked the item")}
          tooltip={'Home'}
          style={{ background: '#456625' }}
        >
          A
        </CircleMenuItem>
        <CircleMenuItem
          onClick={() => alert("Clicked the item")}
          tooltip={'Home'}
          style={{ background: '#7f9b2e' }}
        >
          A
        </CircleMenuItem>
      </CircleMenu>
    </div>
  )
}

export default App;
