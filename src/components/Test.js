import {Component} from "react";


class Test extends Component {
    constructor(props) {
        console.log('lifecycle class')
        console.log('constructor')
        super(props);
        this.inc = this.inc.bind(this)
        this.state = {
            a: 0
        }
    }
    componentDidMount() {
        console.log('componentDidMount - тобто компонент повністю прогрузився')
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
        console.log(prevState)
    }
    componentWillUnmount() {
        console.log('componentWillUnmount - компонент завершив своє існування')
    }

    inc() {
        this.setState(prev => ({a: prev.a + 1}))
    }
    render() {
        return (
            <div>
                <div>A:{this.state.a}</div>
                <div>B:{this.props.b}</div>
                <button onClick={this.inc}>Inc</button>
            </div>
        )
    }
}

export {Test}