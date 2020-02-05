import Task from "./components/Task/index.js"
let element;
let input;
function runOnLoad()
{
    // Create a container for us
    element = document.createElement("div");
    element.id = "container";
    document.body.appendChild(element);
    input = document.getElementById("taskText");
    
    // Handle adding a new task
    var addTaskButton = document.getElementById("addTask");
    addTaskButton.addEventListener("click", onClick)
}

function onClick() {
    console.log("clicked!");
    
    var newTask = new Task({content:input.value,done:false});

//Task 1
    /*if (newTask !== "") {
        console.log("There is no text!");
    } else if (newTask == ""){
        element.appendChild(newTask.render());
        console.log("There is text!");
    }*/
    element.appendChild(newTask.render());

    //if newTask exsists
    //then replace child

    //var newestTask = newTask({content:input.value, done:false});
}



window.addEventListener("DOMContentLoaded", runOnLoad);