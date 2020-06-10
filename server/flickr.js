const Flickr = require('flickr-sdk');
const { FLICKR_API_KEY } = require('./config');

const flickr = new Flickr(FLICKR_API_KEY);

module.exports = flickr;
