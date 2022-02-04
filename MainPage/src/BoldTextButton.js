import React from 'react';

class BoldTextButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: props.width,
            height: props.height,
            text: props.value,
            clickEvent: props.onClick
        }
    }
    componentDidMount() {

    }
    render() {
        return (
        <div className="floating-button btb" style={{width:this.state.width,height:this.state.height}} onClick={this.state.clickEvent}>
            <b>{this.state.text}</b>
        </div>
        );
    }
}

export default BoldTextButton;
