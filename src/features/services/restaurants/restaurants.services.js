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

const restaurantsTransformed = (result) => {
  return camelize(result);
};
// check if promise OK, then Run
RestaurantRequest()
  .then(restaurantsTransformed)
  .then((transformedResponse) => {
    console.log(transformedResponse);
  })
  .catch((err) => {
    console.log("error: ", err);
  });
