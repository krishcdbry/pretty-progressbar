import PropTypes from 'prop-types';

const propTypes = {
    percentage : PropTypes.number.isRequired,   // Progress from 0 to 100. Default 0 
    label : PropTypes.bool,                     // Which shows percentage on the progress bar (true/false) - Default false       
    type : PropTypes.string,                    // Which defines type of progress bar (default/circle/cyclinder/square) - Default 
    progressBarStyle : PropTypes.object,        // Style object for the progressbar wrapper (container)   
    progressStyle: PropTypes.object             // Style object for the progress (content)
}

const defaultProps = {
    lable : false,
    percentage : 0
}

const progressbar_Default = {
	position: 'relative',
	overflow: 'hidden',
	height: '20px',
	width: '290px',
	textAlign: 'center',
	background: '#f0f0f0',
	color: '#fff',
	zIndex: 1,
	fontSize: '17px',
	fontWeight: 'normal',
	letterSpacing: '1px'
}

const progress_Default = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'limegreen',
    zIndex: 1,
    transform: 'scaleX(0)',
    transformOrigin: '0% 100%'
}

const labelStyle = {
    fontSize: '13px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textShadow: '0px 1px 1px #777'
}


// Circle
const circleBarStyle = {
    borderRadius: '50%',
	height: '90px',
	width:  '90px'
}

const circleStyle = {
    transform: 'scaleY(0)',
    transformOrigin: '50% 100%',
    background: 'orange'
}

const progressbar_Circle = Object.assign({}, progressbar_Default, circleBarStyle);
const progress_Circle = Object.assign({}, progress_Default, circleStyle);

// Cyclinder
const cylinderBarStyle = {
    progressbar_Default,
    borderRadius: '30px'
}

const cylinderStyle = {
    background: '#22a0ce',
    transform: 'scaleX(0)'
}

const progressbar_Cylinder = Object.assign({}, progressbar_Default, cylinderBarStyle);
const progress_Cylinder = Object.assign({}, progress_Default, cylinderStyle);


// Square
const squareBarStyle = {
    width: '90px',
    height: '90px'
}

const squareStyle = {
    transform: 'scaleY(0)',
    transformOrigin: '50% 100%',
     background: 'violet'
}

const progressbar_Square = Object.assign({}, progressbar_Default, squareBarStyle);
const progress_Square = Object.assign({}, progress_Default, squareStyle);

export {
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
}