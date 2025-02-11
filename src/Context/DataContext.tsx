import { createContext, ReactNode, useEffect, useState } from "react";
import { IContext, IData } from "./data.interface";

const DataContext = createContext<IContext>({
  data: {} as IData,
  loading: false,
});

export const DataContextProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<IData>({} as IData);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/portfolioData.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch JSON data");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  return <DataContext.Provider value={{ data, loading }}>{children}</DataContext.Provider>;
};

export default DataContext;
