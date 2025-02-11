import React from "react";
import Profile from "./Profile";
import Content from "./Content";

const Main = () => {
  return (
    <div className="h-full w-full max-w-[1600px] mx-auto pt-20">
      <div className="flex lg:flex-row-reverse xs:flex-col ">
        <Content />
        <Profile />
      </div>
      <p className="text-sm text-pri-font text-center w-full bottom-0 sm:mt-8 lg:m-0">
        Crafted with 💙, React, and a sprinkle of Tailwind magic ✨
      </p>
    </div>
  );
};
export default React.memo(Main);
