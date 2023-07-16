import { AiOutlineHome } from "react-icons/ai";
import { HiSwitchVertical } from "react-icons/hi";
import { BsBagCheck } from "react-icons/bs";
import { RiPieChartLine } from "react-icons/ri";
import { LiaToolsSolid, LiaNewspaperSolid } from "react-icons/lia";
export const Menu: React.FC = () => {
  return (
    <ul className="menu bg-white menu-horizontal rounded-box text-black p-3 flex justify-around gap-8  outline font-bold ">
      <li>
        <button className="outline bg-primary text-white transition ease-in-out delay-150">
          <HiSwitchVertical />
          Markets
        </button>
      </li>
      <li>
        <button className="hover:outline hover:bg-primary hover:text-white ">
          <BsBagCheck />
          Orders
          <span className="badge badge-sm badge-warning">NEW</span>
        </button>
      </li>
      <li>
        <button className="hover:outline hover:bg-primary hover:text-white">
          <RiPieChartLine />
          Portfolio
          <span className="badge badge-xs badge-info bg-green-500"></span>
        </button>
      </li>
      <li>
        <button className="hover:outline hover:bg-primary hover:text-white">
          <LiaToolsSolid />
          Tools
          <span className="badge badge-xs badge-info"></span>
        </button>
      </li>
      <li>
        <button className="hover:outline hover:bg-primary hover:text-white">
          <LiaNewspaperSolid />
          News
          <span className="badge badge-sm">99+</span>
        </button>
      </li>
      <li>
        <button className="hover:outline hover:bg-primary hover:text-white">
          <AiOutlineHome />
          Profile
        </button>
      </li>
    </ul>
  );
};
