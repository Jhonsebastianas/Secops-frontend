import React, { Component } from 'react';

export default class Span extends Component {
    render() {
        return (
            <span {...this.props} />
        );
    }
}