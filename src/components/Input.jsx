import React, { Component } from 'react';

const style = {

}

class Input extends Component {
    render () {
        return (
            <input {...this.props} style={style} />
        );
    }
}

export default Input;