import React from 'react'
require('./app.css')

class App extends React.Component {
	render(){
		return(
			<div style={styles.container}>
				<h1 style={styles.heading}>Hello from react</h1>
			</div>
		)
	}
}

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		height: '500px',
		backgroundColor: 'cyan'
	},
	heading: {
		color: 'red',
		display: 'flex',
		justifyContents: 'center',
		alignItems: 'center'
	}
}

export default App
