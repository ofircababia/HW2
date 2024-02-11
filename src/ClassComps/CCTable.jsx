import { Component } from "react";

export default class CCTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: '100%',
        }
    }
    Click = () => {
        this.setState({
            width: '50%'
        })
    }
    dClick = () => {
        this.setState({
            width: '100%'
        })
    }
    render() {
        return (
            <div style={{ height: 270, borderRadius: 30, border: '5px solid' }}>
                <h3>Q3</h3>
                <table style={{ width: this.state.width, border: '1px solid black', borderCollapse: 'collapse' }} onClick={this.Click}
                    onDoubleClick={this.dClick}>
                    <tr style={{ border: '1px solid black', height: '50px' }}>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                    </tr>
                    <tr style={{ border: '1px solid black', height: '50px' }}>
                        <td style={{ border: '1px solid black' }}> </td>
                        <td style={{ border: '1px solid black' }}></td>
                    </tr>
                    <tr style={{ border: '1px solid black', height: '50px' }}>
                        <td style={{ border: '1px solid black' }}> </td>
                        <td style={{ border: '1px solid black' }}></td>
                    </tr>
                </table>
            </div>
        )
    }
}