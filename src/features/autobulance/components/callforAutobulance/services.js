import Fn from "../../utilities/Fn";
import { postRequest } from "../../slice";
import ClientRequest from "../../models/ClientRequest";
import { postRequestBreakdown } from "../../slices/breakdownsSlice";
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
    await dispatch(postRequest(request)).then(async (response) => {
      for (let i = 0; i < inputs["breakdowns"].length; i++) {
        console.log(inputs["breakdowns"][i]);
        try {
          await dispatch(
            postRequestBreakdown({
              request_id: response.payload.request.id,
              breakdown_id: inputs["breakdowns"][i],
            }).then((response1) => {
              console.log(response1);
            })
          );
        } catch (error) {
          console.error("An unexpected error :", error);
        }
      }
    });
  } catch (error) {
    console.error("An unexpected error occurred:", error);
  }
};
