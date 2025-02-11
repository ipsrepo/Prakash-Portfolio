import React, { Fragment } from "react";
import routes from "../../routes";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex flex-row">
      {routes.map((route) => (
        <Fragment key={route.path}>
          <NavLink
            to={route.path}
            className={({ isActive }) =>
              `${isActive ? "text-primary" : "text-pri-font opacity-50"}  font-bold  ease-in uppercase text-xs border-r border-line hover:opacity-90 px-4 md:px-4 py-2`
            }
          >
            {route.title}
          </NavLink>
        </Fragment>
      ))}
    </div>
  );
};
export default React.memo(Nav);
