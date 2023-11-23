export default class ClientService {
  constructor({ autobulance, date, time, total, services }) {
    (this.autobulance = autobulance),
      (this.date = date),
      (this.time = time),
      (this.total = total),
      (this.services = services);
  }
}
