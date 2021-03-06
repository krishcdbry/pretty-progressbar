import React from 'react';
import  {
    propTypes,
    defaultProps,

    progressbar_Default,
    progressbar_Circle,
    progressbar_Cylinder,
    progressbar_Square,


    progress_Default,
    progress_Circle,
    progress_Cylinder,
    progress_Square,

    labelStyle
} from './constants';

class PrettyProgressbar extends React.Component {
    constructor(context, props) {
        super(context, props);

        let finalStyle = this.computeStyle(this.props);

        this.state = {
            style : finalStyle,
            label : false
        }
    }

    computeStyle(data) {
        let {percentage, progressbarStyle, progressStyle, type, label} = data;
        let transform = 'scaleX('+percentage/100+')';
        let defaultProgressStyle = progress_Default;
        let defaultProgressBarStyle = progressbar_Default;

        if (label) {
            label = Math.floor(percentage);
        }

        switch (type) {
            case 'circle' : {
                defaultProgressStyle = progress_Circle;
                defaultProgressBarStyle = progressbar_Circle;
                transform = 'scaleY('+percentage/100+')';
                break;
            }
            case 'cylinder' : {
                defaultProgressStyle = progress_Cylinder;
                defaultProgressBarStyle = progressbar_Cylinder;
                transform = 'scaleX('+percentage/100+')';
                break;
            }
            case 'square' : {
                defaultProgressStyle = progress_Square
                defaultProgressBarStyle = progressbar_Square;
                transform = 'scaleY('+percentage/100+')';
                break;
            }
        }

        let fillPercentage = {
            transform
        }

        return {
            progressbar : Object.assign({}, defaultProgressBarStyle, progressbarStyle),
            progress : Object.assign({}, defaultProgressStyle, progressStyle, fillPercentage),
            label
        }
    }

    
    componentWillReceiveProps(nextProps) {
        let {percentage, label} = nextProps;
        this.setState({ style: this.computeStyle(nextProps), label : (label) ? Math.floor(percentage)+'%' : '' });  
    }

    render() {
        let {percentage, type} = this.props;
        let progressBarClassName = "pretty-progress-bar " + type;
        return (
            <div className={progressBarClassName} style={this.state.style.progressbar}>
                <label style={labelStyle}>{this.state.label}</label>
                <div className="progress-bar" val={percentage} style={this.state.style.progress}/>
            </div>
        )
    }
}

PrettyProgressbar.propTypes = propTypes;
PrettyProgressbar.defaultProps = defaultProps;

export default PrettyProgressbar;