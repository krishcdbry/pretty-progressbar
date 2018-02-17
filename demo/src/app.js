import React from 'react';
import { render } from 'react-dom';
import PrettyProgressbar from '../../dist/index';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            percentage : 0
        }
    }

    fillPercentage() {
        this.interval = setInterval(() => {
            let percentage = Number(this.state.percentage);
            percentage += 0.01;
            if (percentage < 100) {
                this.setState({
                    percentage : percentage.toString()
                })
            }
            else {
                this.setState({
                    percentage : 0
                })
            }
        }, 500);
    }
    

    render() {
        this.fillPercentage();
        let progressBarStyle = {
            'display' : 'inline-block',
            'margin' : '9px'
        }
        let progressStyle = {
            'background' : 'indianred'
        }

        return (
            <div>
                <h1>Progress Bars</h1>

                <div className="section">
                    <h3> Default </h3>
                    <PrettyProgressbar percentage={this.state.percentage} label="true"/>
                </div>

                <div className="section">
                    <h3> Cyclinder </h3>
                    <PrettyProgressbar percentage={this.state.percentage} type='cylinder'/>
                </div>

                <div className="section">
                    <h3> Circle </h3>
                    <PrettyProgressbar 
                        percentage={this.state.percentage} 
                        type='circle' 
                        label="true"
                        progressbarStyle={progressBarStyle} 
                        progressStyle={progressStyle}/>
                </div>

                <div className="section">
                    <h3> Square </h3>
                    <PrettyProgressbar percentage={this.state.percentage} type='square' progressbarStyle={progressBarStyle}/>
                </div>
                
            </div>
        )
    }
}

render(
    <App/>, document.getElementById('root')
)