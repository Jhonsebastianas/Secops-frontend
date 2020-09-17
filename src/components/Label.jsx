import React, { Component } from 'react';

const style = {

}

class Label extends Component {
    render () {
        return (
            <label {...this.props} style={style}></label>
        );
    }
}

export default Label;