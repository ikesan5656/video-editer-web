import { Sprite, Stage } from "@inlet/react-pixi";
import VidioEditorCanvas from "./VideoEditorCanvas";
import useEditorCanvasResize from "../CustamHooks/useEditorCanvasResize";

function VideoEditorContainer() {

	const vidioEditorContainerStyle = {
		//display: "flex",
		//flex: 1,
		flexGrow: 1,
		flexFlow: "column",
		backgroundColor: "#ff7f50",
		padding: 0,
		margin: 0,
		boxSizing: "border-box",
		flexDirection: "column",
		position: "relative",	//リキッド対応
		height: 0,
		overflow: "hidden"
	}

	const canvasStyle = {
		width: "100%",
		height: "100%",
		maxWidth:"100%",
		backgroundColor: "#008b8b",
		boxSizing: "border-box",
		border: 0,

		//キャンバスのリキッド対応
		flexGrow: 1,
		margin: 0,
		padding: 0,
		overflow: "hidden",
		position: "absolute",
		left:0,
		top:0,
		
		//boxsizing: content-box;
	}

	const timeLineStyle = {
		display: "block",
		width: "100%",
		height: "300px",
		backgroundColor: "#4682b4"
	}

	const { size } = useEditorCanvasResize();

	return(
		<div 
			id="vidioEditorContainer"
			style={vidioEditorContainerStyle}
		>
			<Stage 
				id="vidioEditorCanvas"
				width={size.width}
				height={size.height}
				options={{ backgroundColor: 0xA2A7B0 }}
				style={canvasStyle}
			>
	</Stage>
			{/*<div
				id="canvasContainer"
				style={canvasStyle}
			>
				<VidioEditorCanvas/>
	</div>*/}
			{/*<div
				style={timeLineStyle}
			>

</div>*/}
		</div>
	)
}

export default VideoEditorContainer;