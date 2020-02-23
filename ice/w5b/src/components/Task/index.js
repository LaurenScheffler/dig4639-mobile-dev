import './index.css'

class Task {
  constructor (props) {
    // Stores the argument in this.props
    this.props = props
    // Creates a new HTML DIV element
    this.element = document.createElement('div')
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    this.onClick = this.onClick.bind(this)
    checkbox.addEventListener('change', this.onClick)
    this.element.appendChild(checkbox)
    const span = document.createElement('span')
    this.element.appendChild(span)
    span.innerHTML = this.props.content
    this.element.className = 'task'
  }

  onClick (e) {
    var myString = 'asdf'
    if (myString == '') {
      console.log('Input is true')
    }
    console.log(this)
    console.log(e.target)
    console.log(e.target.checked)
  }

  render () {
    return this.element
  }
}

export default Task
