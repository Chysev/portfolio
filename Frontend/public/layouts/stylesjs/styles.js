// Home Page

const introduction = document.getElementById("introduction");
const container = document.getElementById("container_introduction");
const aboutmebtn = document.getElementById("aboutme-btn");
const aboutme = document.getElementById("aboutme");
const container_aboutme = document.getElementById("container-aboutme");
const container_aboutme_text = document.getElementById(
  "container-aboutme-text"
);
const container_aboutme_tools = document.getElementById(
  "container-aboutme-tools"
);
const Myskillsbtn = document.getElementById("MySkills");
const Socialbtn = document.getElementById("Social");
const myskills = document.getElementById("myskills");
const grp_card_skills = document.getElementById("grp-card-skills");
const myskillspercent = document.getElementById("myskills-percent");
const percentcontainer = document.getElementById("percent-container");
const bard = document.getElementById("bars");
const social = document.getElementById("social");

// Introduction
introduction.style.backgroundColor = "#121212";
introduction.style.filter = "contrast(95%)";
introduction.style.height = "100vh";
introduction.style.display = "flex";

container.style.color = "white";
container.style.margin = "20rem 26rem";
container.style.fontFamily = "Ubuntu, sans-serif";

aboutmebtn.style.margin = "20px 3px 0px";
aboutmebtn.style.padding = "12px 36px";
aboutmebtn.style.fontSize = "25px";
aboutmebtn.style.color = "#ffffff";
aboutmebtn.style.borderWidth = "0.1px";
aboutmebtn.style.borderStyle = "solid";
aboutmebtn.style.borderRadius = "6px";

// AboutMe
aboutme.style.backgroundColor = "whitesmoke";
aboutme.style.height = "65vh";
aboutme.style.display = "flex";

container_aboutme.style.display = "flex";
container_aboutme.style.height = "50vh";
container_aboutme.style.width = "70rem";
container_aboutme.style.margin = "7.5vh 400px";
container_aboutme.style.alignItems = "center";

container_aboutme_text.style.width = "65vh";
container_aboutme_text.style.color = "#121212";

container_aboutme_tools.style.margin = "10px 0px";

Myskillsbtn.style.display = "inline-block";
Myskillsbtn.style.borderColor = "crimson";
Myskillsbtn.style.fontSize = "20px";
Myskillsbtn.style.fontWeight = "500";
Myskillsbtn.style.padding = " 10px 30px";
Myskillsbtn.style.borderRadius = " 6px";

Socialbtn.style.display = "inline-block";
Socialbtn.style.borderColor = "crimson";
Socialbtn.style.fontSize = "20px";
Socialbtn.style.fontWeight = "500";
Socialbtn.style.padding = " 10px 30px";
Socialbtn.style.borderRadius = " 6px";

//MySkills
myskills.style.height = "70vh";
myskills.style.display = "flex";
myskills.style.backgroundColor = "#121212";

grp_card_skills.style.display = "flex";
grp_card_skills.style.color = "white";
grp_card_skills.style.height = "40vh";
grp_card_skills.style.margin = "15vh 12.4vh";
grp_card_skills.style.alignItems = "center";

//MySkills Percentages
myskillspercent.style.height = "55vh";
myskillspercent.style.display = "flex";
myskillspercent.style.backgroundColor = "whitesmoke";

percentcontainer.style.display = "flex";
percentcontainer.style.alignItems = "center";
percentcontainer.style.width = "70rem";
percentcontainer.style.height = "400px";
percentcontainer.style.margin = "3.4rem 25rem";

bars.style.display = "flex";
bars.style.margin = "7vh 0vh";
bars.style.width = "40%";
bars.style.alignItems = "center";

// Social
social.style.backgroundColor = "#121212";
social.style.height = "60vh";
social.style.display = "flex";