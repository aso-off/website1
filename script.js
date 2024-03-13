function updateTime() {
  const now = new Date();
  const timeOffset = 0;
  const localTime = new Date(now.getTime() + timeOffset * 60 * 60 * 1000);
  const hours = localTime.getHours().toString().padStart(2, "0");
  const minutes = localTime.getMinutes().toString().padStart(2, "0");
  const seconds = localTime.getSeconds().toString().padStart(2, "0");

  document.querySelector(
    "#time"
  ).textContent = `${hours}:${minutes}:${seconds}`;

  const options = {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const formattedDate = localTime.toLocaleDateString("en-US", options);
  document.querySelector("#date").textContent = formattedDate;
}

setInterval(updateTime, 1000);
updateTime();
