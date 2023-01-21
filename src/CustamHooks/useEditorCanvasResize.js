import { useLayoutEffect, useState, useEffect } from "react";

const useEditorCanvasResize = () => {
	const [size, setSize] = useState({width: 0, height: 0});
	

	useEffect(() => {

		const updateSize = () => {
			const editorContainer = document.getElementById("vidioEditorContainer");
			setSize({...size, width: editorContainer.offsetWidth, height: editorContainer.offsetHeight});
		};

		let timeoutId;

		window.addEventListener('resize', () => {
			if(timeoutId) {
				return;
			}

			timeoutId = setTimeout( () => {
				updateSize();
				timeoutId = 0;
			}, 500)
		});

		updateSize();

		return () => window.removeEventListener('resize', updateSize);

	},[]);

	return {size};
}

export default useEditorCanvasResize;