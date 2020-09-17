import React, { Component } from 'react';

export default class Div extends Component {

    render() {
        return (
            <div {...this.props} />
        );
    }
}