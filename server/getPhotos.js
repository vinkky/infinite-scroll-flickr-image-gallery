const flickr = require('./flickr');

const getRecentPhotos = ({ page = 1, pageSize = 20 }) => {
	return flickr.photos.getRecent({ page, per_page: pageSize });
};

module.exports = getRecentPhotos;
