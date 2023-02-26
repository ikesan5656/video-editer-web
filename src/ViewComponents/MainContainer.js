/*メインのコンテンツを入れるコンテナ*/
import React from "react";
import LibraryArea from "./LibraryArea";
import VideoEditorContainer from "./VideoEditorContainer";

function MainContainer() {

	const mainContainerStyle = {
		display: "flex",
		width: "100%",
		height: "100%",
		flexGrow: 1,
		backgroundColor: "#808080",
		boxSizing: "border-box",
		flexDirection: "row",
		//flexGrow: 1
	}

	return(
		<div 
			id="mainContainer"
			style={mainContainerStyle}
		>
			<LibraryArea/>
			<VideoEditorContainer/>
		</div>
	)
}

export default MainContainer;