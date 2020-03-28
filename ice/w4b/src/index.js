import Component from "./Component.js";
import Task from "./Task.js";
function runOnLoad()
{
    console.log("New change");
    let element = document.createElement("div");
    element.id = "Test";
    document.body.appendChild(element);
    // console.log(x);
    var comp = new Component(document.getElementById("addTask"));
    let element2 = document.createElement("div");
    element2.innerHTML = comp.render();
    console.log("Hello World truly");
    let myTask = new Task(
        {
            content: "Finish ICE Exercise",
            done: false
        }
    );
    var container = document.getElementById("taskList");
    var newtask = document.createElement("div");
    newtask.innerHTML = myTask.render();
    container.appendChild(newtask); 
    console.log(myTask.render());
    
}

window.addEventListener("DOMContentLoaded", runOnLoad);