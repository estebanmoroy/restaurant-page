function renderHomeTab() {
  let tabTitle = document.querySelector("#home");
  tabTitle.classList.add("active");

  let tabContent = document.querySelector(".tab-content");
  let welcomeMessage = document.createElement("h1");
  welcomeMessage.textContent = "Our Restaurant is Fantastic!";
  tabContent.appendChild(welcomeMessage);
}

export { renderHomeTab };
