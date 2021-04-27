import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { connect } from 'react-redux'
import { fetchUser } from '../redux/ActionCreators'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { bindActionCreators } from 'redux'

import HomeScreen from './Home'

const Tab = createBottomTabNavigator()

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			fetchUser,
		},
		dispatch,
	)

const mapStateToProps = (state) => ({
	user: state.user,
})

class Main extends Component {
	componentDidMount() {
		this.props.fetchUser()
	}

	render() {
		//console.log('main: ', this.props.user.currentUser, ' **************************')

		const currentUserData = this.props.user.currentUser
		if (this.props.user.isLoading) {
			return 'LOADING'
		}
		return (
			<Tab.Navigator>
				<Tab.Screen name="Home" component={HomeScreen} />
			</Tab.Navigator>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
