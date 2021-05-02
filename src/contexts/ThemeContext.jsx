import React, { createContext, useReducer } from "react";
import { navReducer } from "../reducers/ThemeReducer";
export const ThemeContext = createContext();
const ThemeContextProvider = (props) => {
  const [items, dispatch] = useReducer(navReducer, [
    { link: "#our-services", value: "our services" },
    { link: "#work", value: "our team" },
    { link: "#about-us", value: "about us" },
    { link: "#subscribe", value: "subscribe" },
    { link: "#useful-links", value: "useful links" },
  ]);
  return (
    <ThemeContext.Provider value={{ items, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;
