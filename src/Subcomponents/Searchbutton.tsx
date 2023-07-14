
export const SearchButton = () => {


  return (
    <div className="bg-gray-200 border border-primary rounded-full  ">
    <button
        className="flex flex-row  focus:outline-none  "
        
      >
      <input
        type="text"
        className='transition-all duration-1000 
          w-48
          outline-none px-5 h-10 bg-transparent text-black '
        placeholder="Search  Markets.."
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
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
           
          </svg>

      </button>
    </div>
  );
};


