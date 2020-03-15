import React, { Component } from 'react';
import PieChart from '../../charts/PieChart';
import './view2.css';

export class View2 extends Component {
    render() {
        const {data} = this.props;
        return (
            <div id="view2" className="pane">
                <div className="header">Gender</div>
                <PieChart data={data} width={260} height={260} />
                
            </div>
        )
    }
}

export default View2;
