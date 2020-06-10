import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import ImageItem from './ImageItem';

import { generateId } from '../utils';

const ImageList = ({ images, loading }) => {
	return (
		<div>
			{images.map((image) => <ImageItem key={image.id + generateId()} image={image} />)}
			{loading && <CircularProgress />}
		</div>
	);
};

ImageList.propTypes = {
	images: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired
};

export default ImageList;
