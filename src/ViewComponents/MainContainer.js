/*メインのコンテンツを入れるコンテナ*/
import LibraryArea from "./LibraryArea";
import VideoEditorContainer from "./VideoEditorContainer";

function MainContainer() {

	const mainContainerStyle = {
		display: "flex",
		width: "100%",
		backgroundColor: "#808080",
		boxSizing: "border-box",
		flexGrow: 1
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