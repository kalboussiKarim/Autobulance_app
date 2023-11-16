import http from "../utilities/http";
class BreakdownServices {
  getAllBreakDown() {
    return http.get("/breakdown");
  }
}
export default new BreakdownServices();
