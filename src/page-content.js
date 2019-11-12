function renderPageContent() {
  let content = document.querySelector("#content");

  let mainImg = document.createElement("div");
  mainImg.classList.add("main-img");
  content.appendChild(mainImg);

  let textContent = document.createElement("div");
  textContent.classList.add("text-content");
  let nav = document.createElement("nav");
  let ul = document.createElement("ul");

  let liHome = document.createElement("li");
  let aHome = document.createElement("a");
  aHome.id = "home";
  aHome.textContent = "Home";
  liHome.appendChild(aHome);
  ul.appendChild(liHome);

  let liMenu = document.createElement("li");
  let aMenu = document.createElement("a");
  aMenu.id = "menu";
  aMenu.textContent = "Menu";
  liMenu.appendChild(aMenu);
  ul.appendChild(liMenu);

  let liContact = document.createElement("li");
  let aContact = document.createElement("a");
  aContact.id = "contact";
  aContact.textContent = "Contact";
  liContact.appendChild(aContact);
  ul.appendChild(liContact);

  nav.appendChild(ul);
  textContent.appendChild(nav);

  let tabContent = document.createElement("div");
  tabContent.classList.add("tab-content");
  textContent.appendChild(tabContent);

  content.appendChild(textContent);

  let footer = document.createElement("footer");
  footer.textContent = "Restaurant Page - Made by Esteban Moroy ";
  let linkGitHub = document.createElement("a");
  linkGitHub.setAttribute(
    "href",
    "https://github.com/estebanmoroy/restaurant-page"
  );
  let gitHubIcon = document.createElement("i");
  gitHubIcon.classList.add("fab", "fa-github");
  linkGitHub.appendChild(gitHubIcon);
  footer.appendChild(linkGitHub);
  content.appendChild(footer);
}

export { renderPageContent };
