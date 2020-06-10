import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import ArrowUpward from '@material-ui/icons/ArrowUpward';

const styles = {
	position: 'fixed',
	right: 50,
	bottom: 20
};

const ScrollButton = ({ containerRef }) => {
	const scrollToTop = () => containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });

	return (
		<IconButton style={styles} color="secondary" aria-label="scroll-top" component="span" onClick={scrollToTop}>
			<ArrowUpward />
		</IconButton>
	);
};

ScrollButton.propTypes = {
	containerRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired
};

export default ScrollButton;
