import { useEffect } from 'react';

const useDetectBottom = (containerRef, callBack) => {
	useEffect(
		() => {
			containerRef.current.addEventListener('scroll', () => {
				if (
					containerRef.current.scrollTop + containerRef.current.clientHeight >=
					containerRef.current.scrollHeight
				) {
					callBack();
				}
			});
		},
		[ callBack, containerRef ]
	);
};

export default useDetectBottom;
