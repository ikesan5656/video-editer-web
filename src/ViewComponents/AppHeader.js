/*アプリ自体のヘッダー*/
import VideoEngine from "../Modules/VideoEngine.ts";

function AppHeader() {

	const videoEngine = VideoEngine.getInstance();

	const appHeaderStyle = {
		width: "100%",
		height: "50px",
		backgroundColor: "lightcyan",
		boxSizing: "border-box",
		flexGrow: 1
	}

	const testClick = () => {
		videoEngine.startPreviewVideo();
	}

	const stop = () => {
		videoEngine.stopPreviewVideo();
	}

	return(
		<div id="appHeader"
			style={appHeaderStyle}
		>
			<button
				onClick={testClick}
			>
				start
			</button>
			<button
				onClick={stop}
			>
				stop
			</button>
		</div>
	)
}

export default AppHeader;