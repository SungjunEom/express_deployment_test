import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: props.width,
            height: props.height,
            text: props.value,
            clickEvent: props.cbFunction
        }
    }
    componentDidMount() {

    }
    render() {
        return (
        <div className="floating-button" style={{width:this.state.width,height:this.state.height}} onClick={this.state.clickEvent}>
            {this.state.text}
        </div>
        );
    }
}

export default Button;