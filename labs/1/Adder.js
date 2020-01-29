class Adder {
    constructor(props) {
        this.props = props; 
    }
    render() {
        return `<p>${this.props.a} + ${this.props.b}</p>`
    }
}
export default Adder; 