class Adder {
    props;
    constructor(props) {
        this.props = props; 
    }

    sum(){
        return this.props.a + this.props.b;
    }
    
    render() {
        return `<p>The sum of ${this.props.a} + ${this.props.b} is ${this.props.sum()}</p>`;
    }
}
module.exports = Adder; 