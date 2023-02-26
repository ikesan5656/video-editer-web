/*ライブラリエリア*/
import React from "react";
import VideoEngine from "../Modules/VideoEngine.ts";

function LibraryArea() {
	//const videoEngine = VideoEngine.getInstance();
	//const videoEngine2 = VideoEngine.getInstance();

	const libraryAreaStyle = {
		width: "300px",
		height: "100%",
		//display: "flex",
		//justifyContent: "flex-start",
		backgroundColor: "#cccccc"
	}
	return(
		<div 
			id="libraryArea"
			style={libraryAreaStyle}
		>
			<p>ライブラリエリア</p>
		</div>
	)
}

export default LibraryArea;