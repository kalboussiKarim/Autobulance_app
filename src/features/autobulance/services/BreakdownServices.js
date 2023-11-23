import http from "../utilities/http";
class BreakdownServices {
  getAllBreakDown() {
    return http.get("/breakdown");
  }
  postRequestBreakdown(data) {
    return http.post("/breakdownRequest/client/", data);
  }
}
export default new BreakdownServices();
