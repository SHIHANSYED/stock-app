// @ts-nocheck
import {
  AmazonWidget,
  AppleWidget,
  GoogleWidget,
  MicrosoftWidget,
  NvidiaWidget,
} from "../Subcomponents/Charts";
import { useLocation } from "react-router";
import { NavBar2 } from "../components/NavBar2";
import google from "../Assets/Images/google.jpg";
import apple from "../Assets/Images/apple.jpg";
import amazon from "../Assets/Images/amazon.jpg";
import microsoft from "../Assets/Images/microsoft.jpg";
import nvidia from "../Assets/Images/nvidia.png";
import { useEffect, useState } from "react";
import axios from "axios";

export const ChartPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  type DataItem = any;

  const [stockData, setStockData] = useState<DataItem[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: DataItem = await axios.get(
          `http://localhost:4000/api/stock`
        );
        const filteredData = await response?.data?.filter(
          (item) => item.symbol === id
        );
        setStockData(filteredData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-violet-400 h-screen">
      {stockData?.map((item) => (
        <div key={item.symbol}>
          <NavBar2 />
          <div className="float-left p-4 bg-violet-400 border-r-4 border-gray-200">
            {id === "AAPL" && <AppleWidget />}
            {id === "MSFT" && <MicrosoftWidget />}
            {id === "AMZN" && <AmazonWidget />}
            {id === "NVDA" && <NvidiaWidget />}
            {id === "GOOGL" && <GoogleWidget />}
          </div>
          <div className="bg-violet-400 flex justify-center py-5 ">
            <div className="card w-96 h-full bg-white shadow-xl">
              <figure className="px-10 pt-6">
                <img
                  src={id === "AAPL" ? apple : ""}
                  alt="logo"
                  className="rounded-xl"
                />
                <img
                  src={id === "MSFT" ? microsoft : ""}
                  alt="logo"
                  className="rounded-xl"
                />
                <img
                  src={id === "AMZN" ? amazon : ""}
                  alt="logo"
                  className="rounded-xl"
                />
                <img
                  src={id === "NVDA" ? nvidia : ""}
                  alt="logo"
                  className="rounded-xl"
                />
                <img
                  src={id === "GOOGL" ? google : ""}
                  alt="logo"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body  ">
                <div className="">
                  <h1 className="font-semibold text-black text-lg ">
                    {item.name}{" "}
                    <span className="text-gray-400">{item.symbol}</span>
                  </h1>
                </div>
                <div className="card-actions  ">
                  <button className="btn bg-green-500 text-white w-full ">
                    Buy
                  </button>
                  <button className="btn bg-red-500 text-white w-full ">
                    Sell
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap bg-white rounded-box p-1  ">
            <div className="w-2/3 p-2 space-y-2">
              <div className=" text-black">Opening Price </div>
              <div className=" text-black">% Change </div>
              <div className=" text-black">Current Price </div>
              <div className=" text-black">Exchange </div>
              <div className=" text-black">Market Cap </div>
            </div>
            <div className="w-1/3 p-2 space-y-2">
              <div className="text-black font-bold">
                {item.openingPrice}
                {" $"}
              </div>
              <div
                className={`font-bold ${
                  item.percentageChange > 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {item.percentageChange}
                {" %"}
              </div>
              <div
                className={`font-bold ${
                  item.currentPrice > 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {item.currentPrice}
                {" $"}
              </div>
              <div className="font-bold text-black">{item.exchange}</div>
              <div className="font-bold text-black">{item.marketCap}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
