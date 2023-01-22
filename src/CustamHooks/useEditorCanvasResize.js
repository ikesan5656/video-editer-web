import { useLayoutEffect, useState, useEffect } from "react";

const useEditorCanvasResize = () => {
	const [size, setSize] = useState({width: 0, height: 0});
	

	useEffect(() => {

		const updateSize = () => {
			const editorContainer = document.getElementById("vidioEditorContainer");

						//canvasのCSS変更
						/*const editorCanvas = document.getElementById("vidioEditorCanvas");
						editorCanvas.style.width = editorContainer.offsetWidth + "px";
						editorCanvas.style.height = editorContainer.offsetHeight + "px";*/

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
			}, 100)
		});

		updateSize();

		return () => window.removeEventListener('resize', updateSize);

	},[]);

	return {size};
}

export default useEditorCanvasResize;