import React, {
  useState,
  useContext,
  useEffect,
  useMemo,
  createContext,
} from "react";

import {
  RestaurantRequest,
  restaurantsTransformed,
} from "./restaurants.services";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  return (
    <RestaurantContext.Provider value={{ restaurants: [1, 2, 3] }}>
      {children}
    </RestaurantContext.Provider>
  );
};
