import { Sprite, Stage } from "@inlet/react-pixi";

import { useEffect, useState } from "react";

function VidioEditorCanvas() {

	//const w = document.getElementById('canvasContainer').clientWidth;
	//const h = document.getElementById('canvasContainer').clientHeight;

	const [w, setW] = useState(0);
	const [h, setH] = useState(0);


	useEffect(() => {


		console.log(document.getElementById('canvasContainer').clientWidth + "px");
		document.getElementById('vidioEditorCanvas').style.width = document.getElementById('canvasContainer').clientWidth + "px";
		document.getElementById('vidioEditorCanvas').style.height = document.getElementById('canvasContainer').clientHeight + "px";

		setW(document.getElementById('canvasContainer').clientWidth);
		setH(document.getElementById('canvasContainer').clientHeight);
  },[])

	return(
		<Stage 
				id="vidioEditorCanvas"
				width={w}
				height={h}
				options={{ backgroundColor: 0xc71585, display: 'block'}}
			>
		</Stage>
	)
}

export default VidioEditorCanvas;