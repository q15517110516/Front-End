import React, { Component } from 'react';
import draw from './vis';

export class BarChart extends Component {

    componentDidMount(){
        draw(this.props);
    }

    componentDidUpdate(){
        draw(this.props);
    }
    render() {
        return (
            <div className="vis-barchart" />
        )
    }
}

export default BarChart
