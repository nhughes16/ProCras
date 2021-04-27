import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { ConfigureStore } from '../redux/ConfigureStore'

import firebase from 'firebase'

import LandingScreen from './Auth/Landing'
import RegisterScreen from './Auth/Register'
import LoginScreen from './Auth/Login'
import Main from './Main'

const store = ConfigureStore()

const Stack = createStackNavigator()
const MainStack = createStackNavigator()

class PreAuth extends Component {
	constructor(props) {
		super(props)

		this.state = {
			loaded: false,
		}
	}

	componentDidMount() {
		firebase.auth().onAuthStateChanged((user) => {
			if (!user) {
				this.setState({
					loggedIn: false,
					loaded: true,
				})
			} else {
				this.setState({
					loggedIn: true,
					loaded: true,
				})
			}
		})
	}

	render() {
		const { loggedIn, loaded } = this.state

		if (!loaded) {
			return (
				<View style={{ flex: 1, justifyContent: 'center' }}>
					<Text>Loading...</Text>
				</View>
			)
		}
		if (!loggedIn) {
			return (
				<NavigationContainer>
					<Stack.Navigator initialRouteName="Landing">
						<Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
						<Stack.Screen name="Register" component={RegisterScreen} />
						<Stack.Screen name="Login" component={LoginScreen} />
					</Stack.Navigator>
				</NavigationContainer>
			)
		}
		return (
			<Provider store={store}>
				<NavigationContainer>
					<MainStack.Navigator initialRouteName="Main">
						<MainStack.Screen name="Main" component={Main} />
					</MainStack.Navigator>
				</NavigationContainer>
			</Provider>
		)
	}
}

export default PreAuth
