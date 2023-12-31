import { SearchButton } from "../Subcomponents/Searchbutton";

export const NavBar: React.FC = () => {
  return (
    <div className="navbar bg-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
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
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-white text-black font-semibold "
          >
            <li>
              <a href="/">Homepage</a>
            </li>
            <li>
              <a href="/">Portfolio</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
          </ul>
        </div>

        <SearchButton />
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
