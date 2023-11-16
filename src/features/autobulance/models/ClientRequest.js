export default class ClientRequest {
  constructor({
    car_type,
    matricule,
    latitude,
    longitude,
    request_type,
    date,
  }) {
    (this.car_type = car_type),
      (this.matricule = matricule),
      (this.latitude = latitude),
      (this.longitude = longitude),
      (this.date = date),
      (this.request_type = request_type);
  }
}
