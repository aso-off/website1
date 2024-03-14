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

//гитхаб
fetch("https://api.github.com/users/aso-off") // replace with your GitHub username
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("public-repos").textContent = data.public_repos;
    document.getElementById("public-gists").textContent = data.public_gists;
  })
  .catch((error) => console.error("Error:", error));

//новое
function disableScroll() {
  window.scrollTo(0, 0);
  document.body.style.overflow = "hidden";
}

// Запрещаем прокрутку при загрузке страницы
window.addEventListener("load", disableScroll);
