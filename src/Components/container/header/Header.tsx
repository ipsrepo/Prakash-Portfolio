import React, { useContext } from "react";
import Nav from "./Nav";
import DataContext from "../../../Context/DataContext";

const Header = () => {
  const { data } = useContext(DataContext);
  return (
    <header className="fixed mt-0 bg-white w-screen text-primary h-20 border-b border-line tracking-wide z-999">
      <div className=" flex flex-row items-center h-full w-full max-w-[1600px] mx-auto my-0">
        <h1 className="text-l font-bolder border-r border-line px-8 h-full flex items-center uppercase">
          {data.name}
        </h1>
        <Nav />
      </div>
    </header>
  );
};
export default React.memo(Header);
