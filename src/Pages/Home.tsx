import { Main } from "../components/Main"
import { Marquee } from "../components/Marquee"
import { NavBar } from "../components/NavBar"

export const Home = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <div>
        <NavBar />
      </div>
      <div className="h-9">
        <Marquee />
      </div>
      <div className="flex-1">
        <Main />
      </div>
    </div>
  );
};
