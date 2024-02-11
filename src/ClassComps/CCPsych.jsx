import { Component } from "react";

export default class CCPsych extends Component {
    constructor(props) {
        super(props);
        this.state = {
            par: '',
            redcolor: 'white'
        }
    }
    showPar = (e) => {

        this.setState({
            par: "Fill in the  field",
            redcolor: 'red',
            par2: ''
        }
        )
        console.log(this.state.par)
    }
    hidePar = (e) => {
        this.setState({
            par: "",
            redcolor: 'white'
        }
        )
        console.log(e.target.id);
        console.log(this.state.par)
    }
    showMessage = (e) => {
        this.hidePar(e);
        if (e.target.value > 555) {
            this.setState({ par2: "Congratulations! You've been accpeted to school" })
        }
        else
            this.setState({ par2: 'Try again next year' })
    }
    render() {
        return (
            <div style={{ height: 150, borderRadius: 30, border: '5px solid' }}>
                <h3>Q2</h3>
                <p style={{ background: this.state.redcolor }}>{this.state.par}</p>
                Surname: <input type="text" onFocus={this.showPar} onBlur={this.hidePar} />
                First Name: <input type="text" onFocus={this.showPar} onBlur={this.hidePar} />
                Grade <input type="text" onFocus={this.showPar} onBlur={this.showMessage} />

                <br />
                <>{this.state.par2}</>
            </div>
        )
    }
}