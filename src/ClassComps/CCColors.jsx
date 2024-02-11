import { Component } from "react";

export default class CCColors extends Component {
    constructor(props) {
        super(props);
        this.newc = "";
        this.state = {
            color: 'white'
        }
    }
    chgColor = (e) => {
        console.log(e.target.value);
        this.newc = e.target.value;
        this.setState({ color: this.newc })
        console.log(this.state.color)
    }

    render() {
        this.newc = this.state.color;
        return (
            <div style={{ height: 150, backgroundColor: this.newc, borderRadius: 30, border: '5px solid' }}>
                <h3>Q1</h3>
                <input type="button" onClick={this.chgColor} style={{ backgroundColor: 'red', borderRadius: 10, width: 75, height: 75 }} value={"red"} />
                <input type="button" onClick={this.chgColor} style={{ backgroundColor: 'blue', borderRadius: 10, width: 75, height: 75 }} value={"blue"} />
                <input type="button" onClick={this.chgColor} style={{ backgroundColor: 'green', borderRadius: 10, width: 75, height: 75 }} value={"green"} />
                <input type="button" onClick={this.chgColor} style={{ backgroundColor: 'purple', borderRadius: 10, width: 75, height: 75 }} value={"purple"} />
                <input type="button" onClick={this.chgColor} style={{ backgroundColor: 'orange', borderRadius: 10, width: 75, height: 75 }} value={"orange"} />
                <input type="button" onClick={this.chgColor} style={{ backgroundColor: 'white', borderRadius: 10, width: 75, height: 75 }} value={"white"} />
                <input type="button" onClick={this.chgColor} style={{ backgroundColor: 'pink', borderRadius: 10, width: 75, height: 75 }} value={"pink"} />
                <input type="button" onClick={this.chgColor} style={{ backgroundColor: 'yellow', borderRadius: 10, width: 75, height: 75 }} value={"yellow"} />
            </div>
        )
    }
}