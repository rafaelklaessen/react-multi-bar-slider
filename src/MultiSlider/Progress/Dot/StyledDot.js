import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import transition from '../../utils/transition';

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

StyledDot.propTypes = {
  hasIcon: PropTypes.bool.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string.isRequired,
  noTransition: PropTypes.bool.isRequired,
  css: PropTypes.object
};

StyledDot.defaultProps = {
  width: 28,
  height: 28
};

export default StyledDot;
