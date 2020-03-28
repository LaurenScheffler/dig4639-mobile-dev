class Task {
    constructor(props){
        this.props = props;
        this.element = document.createElement("div");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change",this.inputChange);
        this.element.appendChild(checkbox);
        let taskText = document.createElement("span");
        taskText.innerHTML = props.content;
        this.element.appendChild(taskText);
    }
    
    render() {
        return this.element;
    }
}
export default Task;