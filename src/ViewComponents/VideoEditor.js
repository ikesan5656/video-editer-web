import { Sprite, Stage } from "@inlet/react-pixi";

function VideoEditor() {
	return(
		<div id="vidioEditorContainer">
			{<Stage 
				id="vidioEditorCanvas"
				options={{ backgroundColor: 0xA2A7B0 }}
			>
		</Stage>}
		</div>
	)
}

export default VideoEditor;