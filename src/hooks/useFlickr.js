import { useEffect, useCallback, useReducer } from 'react';
import socketClient from 'socket.io-client';
import { ENDPOINT, PAGE_SIZE } from '../config';
const socket = socketClient(ENDPOINT);

const reducer = (state, action) => {
	switch (action.type) {
		case 'FETCH_MORE_IMAGES':
			return {
				images: state.images,
				page: state.page + 1,
				loading: true,
				error: null
			};

		case 'FETCH_ERROR':
			return {
				images: state.images,
				page: state.page,
				loading: false,
				error: action.error
			};

		case 'FETCH_SUCCESS':
			return {
				images: [ ...state.images, ...action.images ],
				page: state.page,
				loading: false,
				error: null
			};

		default:
			throw new Error(`Unknown action ${action.type}`);
	}
};

const useFlickr = () => {
	const [ state, dispatch ] = useReducer(reducer, {
		loading: true,
		error: null,
		page: 0,
		images: []
	});

	useEffect(() => {
		socket.on('updateImages', (images) => {
			dispatch({ type: 'FETCH_SUCCESS', images });
		});
		socket.on('onError', (error) => {
			dispatch({ type: 'FETCH_ERROR', error });
		});
		return () => {
			socket.off('updateImages');
			socket.off('onError');
		};
	}, []);

	useEffect(
		() => {
			socket.emit('get images', { page: state.page, pageSize: PAGE_SIZE });
		},
		[ state.page ]
	);

	const getImages = useCallback(
		() => {
			dispatch({ type: 'FETCH_MORE_IMAGES' });
		},
		[ dispatch ]
	);

	return { ...state, getImages };
};

export default useFlickr;
