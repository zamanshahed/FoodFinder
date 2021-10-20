import { mocks } from "./mock";
import camelize from "camelize";

// default mock location 'San_francisco'
export const RestaurantRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("No location: not found");
    }
    resolve(mock);
  });
};

export const restaurantsTransformed = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      isOpenNow: restaurant.opening_hours && restaurant.open_now,
    };
  });
  console.log("Mapped result: ", mappedResults);
  return camelize(mappedResults);
};

// check if promise OK, then Run
// RestaurantRequest()
//   .then(restaurantsTransformed)
//   .then((transformedResponse) => {
//     console.log(transformedResponse);
//   })
//   .catch((err) => {
//     console.log("error: ", err);
//   });
