import http from "../../autobulance/utilities/http";
class AuthServices {
  login(data) {
    return http.post("/client/login", data);
  }
  logout() {
    return http.post("/client/logout");
  }
  signUp(data) {
    return http.post("/client/register", data);
  }
  update(data) {
    return http.put("/", data);
  }
}
export default new AuthServices();
