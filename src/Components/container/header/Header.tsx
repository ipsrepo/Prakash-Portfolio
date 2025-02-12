import React, { useContext, useState } from "react";
import Nav from "./Nav";
import DataContext from "../../../Context/DataContext";
import { MenuIcon } from "../../../icons";

const Header = () => {
  const { data } = useContext(DataContext);

  const [showNav, setShowNav] = useState(false);

  const toggleNavigation = () => setShowNav((preState) => !preState);

  return (
    <header className="fixed mt-0 bg-white w-screen text-primary h-20 border-b border-line tracking-wide z-999">
      <div className=" flex flex-row items-center lg:justify-normal sm:justify-between xs:justify-between h-full w-full max-w-[1600px] mx-auto my-0">
        <h1 className="text-l font-bolder border-r border-line px-8 h-full flex items-center uppercase">
          {data.name}
        </h1>
        <MenuIcon
          className={`hover:bg-light border text-primary rounded-full p-2 border-line mr-4 cursor-pointer w-12 lg:hidden transition_animation ${showNav && "rotate-180"}`}
          onClick={toggleNavigation}
        />
        {showNav && (
          <div className="mobile-nav">
            <Nav onClick={toggleNavigation} />
          </div>
        )}
        <div className="desktop-nav">
          <Nav />
        </div>
      </div>
    </header>
  );
};
export default React.memo(Header);
