import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import transition from '../utils/transition';
import processStyle from '../utils/processStyle';

const StyledDot = glamorous.span({
  position: 'absolute',
  left: 0,
  display: 'block',
  zIndex: 5,
  borderRadius: '50%'
}, ({ hasIcon, width, height, color, noTransition }) => ({
  top: hasIcon ? 0 : '50%',
  transform: hasIcon ? 'translateX(-50%)' : 'translate(-50%, -50%)',
  width: hasIcon ? 0 : width,
  height: hasIcon ? 0 : height,
  backgroundColor: hasIcon ? 'transparent' : color,
  transition: noTransition ? 'none' : transition
}));

const DotIcon = glamorous.img({
  position: 'absolute',
  transform: 'translateX(-50%)',
  userDrag: 'none',
  userSelect: 'none'
}, ({ width, height }) => ({
  width,
  height
}));

const Dot = ({ dot, sliderColor, mouseDown }) => (
  <StyledDot
    className="dot"
    hasIcon={!!dot.icon}
    width={dot.width || 28}
    height={dot.height || 28}
    color={dot.color || sliderColor}
    noTransition={mouseDown}
    css={processStyle(dot.style, { dot, sliderColor, mouseDown })}
  >
    {dot.icon && (
      <DotIcon
        className="icon"
        src={dot.icon}
        width={dot.width || 50}
        height={dot.height || 50}
        draggable={false}
        css={processStyle(dot.iconStyle, { dot, sliderColor, mouseDown })}
      />
    )}
  </StyledDot>
);

Dot.propTypes = {
  dot: PropTypes.oneOfType([
    PropTypes.shape({
      width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      color: PropTypes.string,
      icon: PropTypes.string,
      style: PropTypes.object
    }),
    PropTypes.bool
  ]).isRequired,
  sliderColor: PropTypes.string.isRequired,
  mouseDown: PropTypes.bool.isRequired
};

export default Dot;