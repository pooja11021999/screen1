import React, { createContext, useState } from "react";

import Data from "../../../assets/ConstantItems";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState({
    LocationData: Data.locationData,
    FieldData: Data.FieldData,
    InitialCompanyData: Data.initialCompanyData.companies,
  });
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
