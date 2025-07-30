const Navbar = () => {
    return (
      <div className="px-4 sm:px-8 md:px-14 py-3 sm:py-5 chakra-colors-gray-800 flex justify-between items-center">
        <h1 className="gradient-text jaini-regular text-xl sm:text-3xl md:text-3xl relative">
          Asweep
          <span className="absolute top-0 left-0 w-full h-[2px] bg-white" />
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white" />
        </h1>
  
        <button className="button-gradient text-sm sm:text-base px-3 sm:px-5 py-1 sm:py-2">
          Login
        </button>
      </div>
    );
  };
  
  export default Navbar;
  