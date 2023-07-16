import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { AiOutlineStar } from "react-icons/ai";

export const SearchButton: React.FC = () => {
  type DataItem = any;

  const [stockData, setStockData] = useState<DataItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState<DataItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: DataItem = await axios.get(
          `http://localhost:4000/api/stock`
        );
        setStockData(response?.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = stockData.filter((item) =>
      item?.name?.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const navigate = useNavigate();

  const handleClickButton = (symbol: string) => {
    navigate(`/chart?id=${symbol}`);
  };

  return (
    <div>
      <div className="bg-gray-200 border border-primary rounded-full relative ">
        <button className="flex flex-row  focus:outline-none  ">
          <input
            type="text"
            className="transition-all duration-1000 
          w-48
          outline-none px-5 h-10 bg-transparent text-black "
            placeholder="Search  Markets.."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mt-3 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      {filteredData?.map((item) => (
        <div
          className="menu menu-sm dropdown-content mt-4 z-[1] py-3 shadow rounded-box w-96 bg-white text-black font-semibold absolute border border-primary flex flex-row "
          onClick={() => handleClickButton(item.symbol)}
        >
          <AiOutlineStar />
          <div className="ml-3"> {item.name}</div>
        </div>
      ))}
    </div>
  );
};
