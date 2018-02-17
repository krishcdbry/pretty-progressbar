import PropTypes from 'prop-types';

const propTypes = {
    label : PropTypes.bool,
    percentage : PropTypes.string.isRequired,
    style : PropTypes.object
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
    zIndex: '-1',
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
const cyclinderBarStyle = {
    progressbar_Default,
    borderRadius: '30px'
}

const cyclinderStyle = {
    background: '#22a0ce',
    transform: 'scaleX(0)'
}

const progressbar_Cyclinder = Object.assign({}, progressbar_Default, cyclinderBarStyle);
const progress_Cyclinder = Object.assign({}, progress_Default, cyclinderStyle);


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

    progressbar_Default,
    progressbar_Circle,
    progressbar_Cyclinder,
    progressbar_Square,


    progress_Default,
    progress_Circle,
    progress_Cyclinder,
    progress_Square,

    labelStyle
}