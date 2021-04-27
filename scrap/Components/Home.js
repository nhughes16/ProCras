import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
	user: state.user,
})

function Home(props) {
	if (this.props.user.isLoading) {
		return 'Loading'
	}

	const currentUserData = props.user.currentUser

	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text style={{ color: 'black', backgroundColor: 'blue' }}> {currentUserData.email} </Text>
			<Text>textInComponent === logged in </Text>
		</View>
	)
}

export default connect(mapStateToProps)(Home)
