const NavButton = () => {
  return (
    <nav className="fixed top-8 right-8 md:right-24">
      <button class="relative group">
        <div class="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all hover:bg-gradient-to-t from-cocoa-400/40 to-cocoa-600/75 duration-200">
          <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
            <div class="bg-saffron-900 h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg]"></div>
            <div class="bg-saffron-900 h-[2px] w-7 rounded transform transition-all duration-300 group-focus:-translate-x-10"></div>
            <div class="bg-saffron-900 h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg]"></div>
          </div>
        </div>
      </button>
    </nav>
  );
};
export default NavButton;
