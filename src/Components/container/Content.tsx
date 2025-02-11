import React, { Suspense } from "react";
import SuspensePage from "../pages/Suspense";
import { Navigate, Route, Routes } from "react-router-dom";
import routes from "../routes";
import Page404 from "../pages/404";

const Content = () => {
  return (
    <div className="grow h-fit">
      <div className="bg-white mx-8 my-4 border border-line py-8">
        <Suspense fallback={<SuspensePage />} />
        <Routes>
          {routes.map((route, i) => {
            return route.component ? (
              <Route key={i} path={`/${route.path}`} element={<route.component />} />
            ) : null;
          })}
          <Route path="/" element={<Navigate replace to="/resume" />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </div>
  );
};
export default React.memo(Content);
