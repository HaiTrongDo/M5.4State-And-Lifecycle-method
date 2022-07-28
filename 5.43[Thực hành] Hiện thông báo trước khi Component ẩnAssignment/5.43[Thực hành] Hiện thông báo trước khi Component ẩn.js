import React, {Component} from 'react';
import Hello from "./5.43[Thực hành]Hello";

class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true
        };
    }

    delete = () => {
        this.setState({display: false});
    };

    render() {
        let comp;
        if (this.state.display) {
            comp = <Hello/>;
        }
        return (
            <div style={{textAlign: 'center'}}>
                {comp}
                <button onClick={this.delete}>
                    Delete the component
                </button>
            </div>
        );
    }
}

export default Display;