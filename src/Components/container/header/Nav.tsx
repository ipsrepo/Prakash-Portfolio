import React, { Fragment } from "react";
import routes from "../../routes";
import { NavLink } from "react-router-dom";

interface NavProps {
  onClick?: () => void;
}

const Nav: React.FC<NavProps> = ({ onClick }) => {
  return (
    <div className="navigation">
      {routes.map((route) => (
        <Fragment key={route.path}>
          <NavLink
            to={route.path}
            onClick={onClick}
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
