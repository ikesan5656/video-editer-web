/*アプリ自体のヘッダー*/

function AppHeader() {

	const appHeaderStyle = {
		width: "100%",
		height: "50px",
		backgroundColor: "lightcyan",
		boxSizing: "border-box",
		flexGrow: 1
	}

	const testClick = () => {

	}

	return(
		<div id="appHeader"
			style={appHeaderStyle}
		>
			<button
				onClick={testClick}
			>
				test
			</button>
		</div>
	)
}

export default AppHeader;