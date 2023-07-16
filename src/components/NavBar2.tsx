import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router";

export const NavBar2: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar bg-white">
      <div className="navbar-start ">
        <button
          className="btn btn-ghost btn-circle hover:text-black "
          onClick={() => navigate("/home")}
        >
          <IoArrowBackCircleOutline size={40} />
        </button>
      </div>

      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl" href="/home">
          <img
            src="https://uploads-ssl.webflow.com/62ade931b7f95172d6a2f527/62d80d9aec7500ea59d38d3d_logo_dark.svg"
            alt="logo"
          />
        </a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle ">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
        <button className="btn btn-ghost btn-circle ">
          <div className="avatar">
            <div className="h-10 w-10 rounded-full">
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="profilepic"
              />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};
