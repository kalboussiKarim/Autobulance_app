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
  getTime = () => {
    const dateString = "Fri Nov 17 2023 23:33:47 GMT+0100";
    const dateObject = new Date(dateString);

    // Obtenez l'heure et les minutes au format HH:MM
    const hours = String(dateObject.getHours()).padStart(2, "0");
    const minutes = String(dateObject.getMinutes()).padStart(2, "0");

    const formattedTime = `${hours}:${minutes}`;

    return formattedTime;
  };
}

export default new Fn();
