import React, { useContext } from "react";
import Header from "./header/Header";
import Main from "./Main";
import DataContext from "../../Context/DataContext";
import SuspensePage from "../pages/Suspense";

const Layout = () => {
  const { loading } = useContext(DataContext);

  if (loading) {
    return <SuspensePage />;
  }
  return (
    <div className="h-screen overflow-auto">
      <Header />
      <Main />
    </div>
  );
};
export default React.memo(Layout);
