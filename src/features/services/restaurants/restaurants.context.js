import React, {
  useState,
  useContext,
  useEffect,
  useMemo,
  createContext,
} from "react";

import {
  RestaurantRequest,
  restaurantsTransform,
} from "./restaurants.services";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorCaught, setErrorCaught] = useState(null);

  const retrieveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      RestaurantRequest()
        .then(restaurantsTransform)
        .then((res) => {
          setIsLoading(false);
          setRestaurants(res);
        })
        .catch((err) => {
          setIsLoading(false);
          setErrorCaught(err);
        });
    }, 2000);
  };

  useEffect(() => {
    retrieveRestaurants();
  }, []);

  return (
    <RestaurantContext.Provider
      value={{ restaurants: restaurants, isLoading, errorCaught }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
