import Fn from "../../utilities/Fn";
import { postRequest } from "../../slice";
import ClientRequest from "../../models/ClientRequest";
import { postRequestBreakdown } from "../../slices/breakdownsSlice";
import { getAllRequests } from "../../slice";
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
    const response = await dispatch(postRequest(request));
    // console.log(response.payload.request);
    for (let i = 0; i < inputs["breakdowns"].length; i++) {
      try {
        await dispatch(
          postRequestBreakdown({
            request_id: "1",
            breakdown_id: "3",
          })
        );
      } catch (error) {
        console.error("An  error occured :", error);
      }
    }
  } catch (error) {
    console.error("An unexpected error :", error);
  }
};
