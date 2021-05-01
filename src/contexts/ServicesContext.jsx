import React, { createContext, useState } from 'react';

export const ServicesContext = createContext();
const ServicesContextProvider = (props) => {
  const [services, setServices] = useState([]);
  return (
    <ServicesContext.Provider value={{ services, setServices }}>
      {props.children}
    </ServicesContext.Provider>
  );
};

export default ServicesContextProvider;
