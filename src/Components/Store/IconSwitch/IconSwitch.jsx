import PropTypes from 'prop-types';
import './IconSwitch.css';

function IconSwitch({ icon, onSwitch }) {
	return (
		<button
			className={'store__btn material-icons'}
			onClick={onSwitch}>
			{icon}
		</button>
	)
}

IconSwitch.propTypes = {
	icon: PropTypes.string.isRequired,
	onSwitch: PropTypes.func.isRequired,
}

export default IconSwitch;