class Fn {
  getDate = () => {
    const currentDate = new Date();
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    const formattedDate = currentDate
      .toLocaleDateString("fr-FR", options)
      .replace(/\//g, "-");
    const [day, month, year] = formattedDate.split("-");
    return `${year}-${month}-${day}`;
  };
}

export default new Fn();
