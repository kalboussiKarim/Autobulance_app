import http from "../utilities/http";
class RequestServices {
  postRequest(data) {
    return http.post("/request/client/", data);
  }
  getAllRequests() {
    return http.get("/request/client/task");
  }

  editRequest(data, id) {
    return http.put("/request/client/" + { id }, data);
  }
  deleteRequest(id) {
    return http.delete("/request/client/" + { id });
  }
  getResquesById(id) {
    return http.get("/request/client/" + { id });
  }
}
export default new RequestServices();
