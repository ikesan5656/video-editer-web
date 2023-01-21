/*ライブラリエリア*/

function LibraryArea() {

	const libraryAreaStyle = {
		width: "300px",
		height: "100%",
		display: "flex",
		justifyContent: "flex-start",
		backgroundColor: "#cccccc"
	}
	return(
		<div 
			id="libraryArea"
			style={libraryAreaStyle}
		>
			{/*<p>ライブラリエリア</p>*/}
		</div>
	)
}

export default LibraryArea;