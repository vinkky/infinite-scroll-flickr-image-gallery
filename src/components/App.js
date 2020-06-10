import React, { useState, useRef } from 'react';
import useFlickr from '../hooks/useFlickr';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import useDetectBottom from '../hooks/useDetectBottom';
import ImageList from './ImageList';
import ScrollButton from './ScrollTopButton';

const sortAlphabetically = (images) => {
	return [ ...images ].sort(function(a, b) {
		const titleA = a.title.toLowerCase();
		const titleB = b.title.toLowerCase();
		if (titleA < titleB) return -1;
		if (titleA > titleB) return 1;
		return 0;
	});
};

const App = () => {
	const containerRef = useRef(null);
	const [ sort, setSort ] = useState(false);
	const { images, loading, getImages } = useFlickr();
	useDetectBottom(containerRef, getImages);

	return (
		<div
			style={{ height: '100vh', overflow: 'auto', textAlign: 'center' }}
			className="container"
			ref={containerRef}
		>
			<FormControlLabel
				style={{ position: 'fixed', right: 50, top: 20 }}
				control={<Checkbox checked={sort} onChange={() => setSort(!sort)} />}
				label="Sort alphabetically"
			/>
			<ImageList images={sort ? sortAlphabetically(images) : images} loading={loading} />
			<ScrollButton containerRef={containerRef} />
		</div>
	);
};

export default App;
