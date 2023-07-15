import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BsSearchHeartFill } from 'react-icons/bs';
import axios from 'axios';

interface ChildComponentProps {
    isSelectedFirst: boolean;
  }

export const Tables :  React.FC<ChildComponentProps> = ({isSelectedFirst}) => {
type DataItem = any ;

const [stockData, setStockData] = useState<DataItem[]>([]);
useEffect(() => {
    const fetchData = async () => {
      try {
        const response: DataItem = await axios.get(`http://localhost:4000/api/stock`);
        setStockData(response?.data);
        console.log("hi",stockData);
        
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  },[]);
return(

<div className="relative overflow-x-auto shadow-md rounded-lg outline ">
    { isSelectedFirst ? <table className="w-full text-m text-left text-black bold  ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200  justify-around ">
            <tr>
                <th scope="col" className="p-4">
                    
                        <input id="checkbox-all" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 d" />
                       
                    
                </th>
                <th scope="col" className="px-6 py-3">
                    stock name
                </th>
                <th scope="col" className="px-6 py-3">
                    opening price
                </th>
                <th scope="col" className="px-6 py-3">
                    % Change
                </th>
                <th scope="col" className="px-6 py-3">
                    current Price
                </th>
                <th scope="col" className="px-6 py-3 ">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
         { stockData.map((item,index)=>( 
            
          <tr className="bg-white border-b  h- hover:bg-gray-200  " key={index}>
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-primary bg-white border-gray-300 rounded focus:ring-blue-500  " />
                    </div>
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap w-1 ">
                    {item?.name} <span className='text-gray-400 italic '>{item.symbol}</span>
                </th>
                <td className='px-6 py-4'>
                {item?.openingPrice}
                </td>
               { <td className={`px-6 py-4 ${item?.percentageChange > 0 ? 'text-green-600 ' : 'text-red-600' }`}>
                {item?.percentageChange}%
                </td>}
                <td className={`px-6 py-4 ${item?.currentPrice > item?.openingPrice ? 'text-green-600 ' : 'text-red-600' }`}>
                {item?.currentPrice}    
                </td>
                <td className="px-6 py-4 flex justify-evenly ">
                <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-box transition-colors duration-300">Buy</button>
      <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-box transition-colors duration-300">Sell</button>
      <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-box transition-colors duration-300">View</button>
                 </td>

             </tr>)) }
 
            
        </tbody>
    </table> :           <div className='w-full h-full flex justify-center p-4 '>
      <h2 className="text-2xl font-bold">
        Add your favourite stocks to watchlist
        <motion.span
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
          className="inline-block ml-2"
        >
          <BsSearchHeartFill className="text-red-500 w-6 h-6" />
        </motion.span>
      </h2>
    </div>}
</div>

)
}


 