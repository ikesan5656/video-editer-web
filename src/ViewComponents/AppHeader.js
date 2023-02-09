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
		//VideoEngine.getInstance().addImage(`${process.env.PUBLIC_URL}/logo192.png`);
		//VideoEngine.getInstance().addCircle();
		//VideoEngine.getInstance().addVideoEle();
	}

	const stop = () => {
		videoEngine.stopPreviewVideo();
	}

	const play = () => {
		videoEngine.playVideo();
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
			<button
				onClick={play}
			>
				play
			</button>
		</div>
	)
}

export default AppHeader;