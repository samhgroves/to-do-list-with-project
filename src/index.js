import "./style.css";

const projectsArr = [];

function findActiveProject() {
  for (let i = 0; i < projectsArr.length; i++) {
    if (projectsArr[i].active === true) {
      activeProject = projectsArr[i];
      break;
    }
  }
}

function projectFactory(name) {
  let project = {
    name: name,
    active: false,
    toDoList: [],
    addToProjects: function () {
      projectsArr.push(project);
    },
    addToDo: function (toDo) {
      this.toDoList.push(toDo);
    },
  };
  return project;
}

//Add general project as default
const general = projectFactory("general");
general.addToProjects();
general.active = true;
let activeProject = general;
displayProjects(projectsArr);

function displayProjects(array) {
  let projectList = document.getElementById("project-list");
  //Remove items from project list to avoid duplicating
  while (projectList.firstChild) {
    projectList.removeChild(projectList.lastChild);
  }

  let activeFound = false;

  array.forEach((element) => {
    let projectDiv = document.createElement("div");
    projectDiv.textContent = element.name;
    projectDiv.addEventListener("click", function () {
      displayToDos(element);
      // Remove "active" class from all projectDivs
      projectList.querySelectorAll(".active").forEach((div) => {
        div.classList.remove("active");
      });
      // Add "active" class to the clicked projectDiv
      projectDiv.classList.add("active");
      array.forEach((p) => {
        if (p !== element) {
          p.active = false;
        }
        element.active = true;
        findActiveProject();
      });
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    projectDiv.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", function () {
      let index = array.indexOf(element); // Get the index of the element
      if (index !== -1) {
        array.splice(index, 1); // Remove the element from the array
      }
      projectList.removeChild(projectDiv);
    });

    if (!activeFound) {
      // Add "active" class to the first projectDiv if none are active
      projectDiv.classList.add("active");
      activeFound = true;
    }

    projectList.appendChild(projectDiv);
  });
}

const projectInput = document.getElementById("project-input");
const newProjectBtn = document.getElementById("add-project");
newProjectBtn.addEventListener("click", function () {
  const newProject = projectFactory(projectInput.value);
  newProject.addToProjects();
  displayProjects(projectsArr);
  projectInput.value = "";
});

const toDoInput = document.getElementById("to-do-input");
const newToDoBtn = document.getElementById("add-to-do");
newToDoBtn.addEventListener("click", function () {
  const newToDo = toDoFactory(toDoInput.value);
  activeProject.addToDo(newToDo);
  displayToDos(activeProject);
  toDoInput.value = "";
});

function toDoFactory(task) {
  let toDo = {
    task: task,
    done: false,
  };
  return toDo;
}

const makeDinner = toDoFactory("make dinner");
general.addToDo(makeDinner);
displayToDos(general);
function displayToDos(project) {
  let toDoContainer = document.getElementById("to-do-list");
  let toDoArr = project.toDoList;

  while (toDoContainer.firstChild) {
    toDoContainer.removeChild(toDoContainer.lastChild);
  }

  toDoArr.forEach((element) => {
    let toDo = document.createElement("div");
    toDo.textContent = element.task;
    toDoContainer.appendChild(toDo);

    let doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    doneBtn.addEventListener("click", function () {
      toDo.classList.toggle("done");
      element.done = !element.done;
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
      let index = toDoArr.indexOf(element); // Get the index of the element
      if (index !== -1) {
        toDoArr.splice(index, 1); // Remove the element from the array
      }
      toDoContainer.removeChild(toDo);
    });
    if (element.done) {
      toDo.classList.add("done");
    }
    toDo.appendChild(doneBtn);
    toDo.appendChild(deleteBtn);
  });
}
