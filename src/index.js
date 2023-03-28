const projectsArr = [];

function projectFactory(name) {
  let project = {
    name: name,
    active: false,
    addToProjects: function () {
      projectsArr.push(project);
    },
  };
  return project;
}
//Add general project as default
const general = projectFactory("general");
general.addToProjects();

//Adds project.name from projectsArr to DOM
function displayProjects(array) {
  let projectList = document.getElementById("project-list");
  //Remove items from project list to avoid duplicating
  while (projectList.firstChild) {
    projectList.removeChild(projectList.lastChild);
  }
  array.forEach((element) => {
    projectDiv = document.createElement("div");
    projectDiv.textContent = element.name;
    projectList.appendChild(projectDiv);
  });
}

displayProjects(projectsArr);

const projectInput = document.getElementById("project-input");

const newProjectBtn = document.getElementById("add-project");
newProjectBtn.addEventListener("click", function () {
  const newProject = projectFactory(projectInput.value);
  newProject.addToProjects();
  displayProjects(projectsArr);
  projectInput.value = "";
});
