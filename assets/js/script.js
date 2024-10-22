document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
      document.querySelector(".preloader").classList.add("active");
  } else {
      setTimeout(() => {
          // document.querySelector(".preloader").classList.remove("active");
          document.querySelector(".preloader").classList.add("end");
          // document.querySelector(".dockWindow").classList.add("active");
      }, 1200)
  }
};

if (document.querySelector(".floatingAction")) {
  window.onscroll = () => {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          document.querySelector(".floatingAction").classList.add("active")
      } else {
          document.querySelector(".floatingAction").classList.remove("active")
      }
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
          document.querySelector(".floatingAction").classList.add("up")
      } else {
          document.querySelector(".floatingAction").classList.remove("up")
      }
  }
  document.querySelector(".floatingAction").onclick = () => {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}

if (document.querySelector(".portfolioSection #portfolioContainer")) {
  document.querySelector(".portfolioSection #portfolioContainer").innerHTML =
    "";
  for (let i = 0; i < projects.length; i++) {
    document.querySelector(
      ".portfolioSection #portfolioContainer"
    ).innerHTML += `
            <div class="col-lg-4 col-md-6 mb-2">
                <a class="card"
                    target="_blank" onclick="modalContentSet('${
                      projects[i].pName
                    }','${projects[i].pImage}','${projects[i].pLink}','${
      projects[i].pDesc
    }','${JSON.stringify(projects[i].pTech)}')">
                    <img src="assets/images/projects/${projects[i].pImage}" alt>
                    <div class="overlay" data-category="${projects[i].pCategory}" data-name="${projects[i].pName}"><ion-icon
                            name="add-outline"></ion-icon></div>
                </a>
            </div>
        `;
  }
}

function modalContentSet(pName, pImage, pLink, pDesc, pTech) {
  document.querySelector(".modalSection").classList.toggle("active");
  document.querySelector(".modalSection").classList.remove("full");
  document.querySelector(".modalSection").classList.remove("expand");
  document.querySelector(".modalSection").classList.remove("extra");
  document.querySelector(".modalSection #pName").innerHTML = pName;
  document.querySelector(".modalSection #pDesc").innerHTML = pDesc;
  document.querySelector(".modalSection #pLink").href = pLink;
  document.querySelector(".modalSection #pLink2").href = pLink;
  document.querySelector(".modalSection #pLink3").src = pLink;
  document.querySelector(
    ".modalSection #pImage"
  ).src = `assets/images/projects/${pImage}`;
  let tech = JSON.parse(pTech);
  document.querySelector(".modalSection #pTech").innerHTML = "";
  for (let i = 0; i < tech.length; i++) {
    document.querySelector(".modalSection #pTech").innerHTML += `
            <div class="col-3 skill">
                <img src="assets/images/skills/${skills[tech[i]].image}" alt>
                <div class="skillName">${skills[tech[i]].name}</div>
            </div>
        `;
  }
  VanillaTilt.init(document.querySelectorAll(".skill"), {
    max: 20,
    speed: 1200,
  });
}