import React, { Component } from 'react';
import draw from './vis';

export class LineChart extends Component {

    componentDidMount(){
        draw(this.props);
    }

    componentDidUpdate(){
        draw(this.props);
    }
    render() {
        return (
            <div className="vis-linechart" />
        )
    }
}

export default LineChart