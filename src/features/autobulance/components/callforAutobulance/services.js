import Fn from "../../utilities/Fn";
import { postRequest } from "../../slice";
import ClientRequest from "../../models/ClientRequest";

export const handlePostRequest = async ({ inputs, localisation, dispatch }) => {
  try {
    const request = new ClientRequest({
      car_type: inputs["car_model"],
      matricule: inputs["car_number"],
      latitude: localisation.latitude.toString(),
      longitude: localisation.longitude.toString(),
      request_type: "emergency",
      date: Fn.getDate(),
    });
    await dispatch(postRequest(request)).then((response) => {
      response.error
        ? console.log(response.payload)
        : console.log(response.payload.request);
    });
  } catch (error) {
    console.log("An unexpected error occurred:", error);
  }
};
