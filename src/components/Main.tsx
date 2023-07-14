import { useState } from "react";
import { Menu } from "../Subcomponents/Menu";

export const Main: React.FC = () => {

    const [isSelectedFirst, setIsSelectedFirst] = useState(true);
    const [isSelectedSecond, setIsSelectedSecond] = useState(false);
    const [isSelectedThird, setIsSelectedThird] = useState(false);
    const [isSelectedFourth, setIsSelectedFourth] = useState(false);


    const handleFirstButtonClick = () => {
      setIsSelectedFirst(true);
      setIsSelectedSecond(false);
      setIsSelectedThird(false);
      setIsSelectedFourth(false);


    };
    const handleSecondButtonClick = () => {
        setIsSelectedFirst(false);
        setIsSelectedSecond(true);
        setIsSelectedThird(false);
        setIsSelectedFourth(false);
      };
      const handleThirdButtonClick = () => {
        setIsSelectedFirst(false);
        setIsSelectedSecond(false);
        setIsSelectedThird(true);
        setIsSelectedFourth(false);
      };
      const handleFourthButtonClick = () => {
        setIsSelectedFirst(false);
        setIsSelectedSecond(false);
        setIsSelectedThird(false);
        setIsSelectedFourth(true);
      };


  return (
    <div className=" bg-violet-400  h-full grid grid-cols-8 grid-rows-6 gap-2 p-3 ">
        <div className="col-start-2 col-end-8 row-start-1 row-end-7 h-full w-full rounded-lg my-2  " >
          <div className="mt-3 text-black  flex justify-around px-3 font-mono font-bold bg-white rounded-lg my-2 border border-primary">


            <button className={`px-4 p-2 rounded focus:outline-none ${
          isSelectedFirst ? 'bg-gray-900 text-white rounded-m ' : ''
        }`}
        onClick={handleFirstButtonClick}>{isSelectedFirst? " ⚪ Main Market":"Main Market" }
        
        </button>
        


            <button className={`px-4 py-2 rounded focus:outline-none ${
          isSelectedSecond ? 'bg-gray-900 text-white rounded-m ' : ''
        }`}
        onClick={handleSecondButtonClick}>{isSelectedSecond ? " ⚪ Junior Market" : "Junior Market"}</button>
            <button className={`px-4 py-2 rounded focus:outline-none ${
          isSelectedThird ? 'bg-gray-900 text-white rounded-m ' : ''
        }`}
        onClick={handleThirdButtonClick}>{isSelectedThird ? " ⚪ FX Rates":"FX Rates" }</button>
            <button className={`px-4 py-2 rounded focus:outline-none ${
          isSelectedFourth ? 'bg-gray-900 text-white rounded-m ' : ''
        }`}
        onClick={handleFourthButtonClick}>{isSelectedFourth? " ⚪ Crypto":" Crypto"}</button>
          </div>  
        </div>
      <div className="col-start-2  col-end-8 row-start-6 row-end-6 w-full  ">
        <Menu/>
      </div>
    </div>
  );
};
