import PropTypes from 'prop-types';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
	root: {
		display: 'flex',
		marginTop: '20px',
		marginBottom: '20px',
		marginLeft: '20%',
		marginRight: '20%',
		justifyContent: 'space-between'
	},
	cover: {
		cursor: 'pointer',
		width: 550,
		height: 350
	}
};

const openRequestedPopup = (image) => window.open(generateUrl(image, 'c'), '_blank').focus();

const generateUrl = ({ farm, server, id, secret }, type) =>
	`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_${type}.jpg`;

const ImageItem = ({ image }) => {
	return (
		<Card style={styles.root}>
			<CardMedia
				onClick={() => openRequestedPopup(image, 'c')}
				style={styles.cover}
				image={generateUrl(image, 'c')}
				title={image.title}
			/>
			<CardContent style={{ maxWidth: '50%' }}>
				<Typography component="h6" variant="h6">
					{image.title}
				</Typography>
			</CardContent>
		</Card>
	);
};

ImageItem.propTypes = {
	image: PropTypes.object.isRequired
};

export default ImageItem;
