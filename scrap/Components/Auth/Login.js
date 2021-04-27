import React, { Component } from 'react'
import { Text, View, TextInput, Button, StyleSheet } from 'react-native'

import firebase from 'firebase'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
	user: state.user,
})

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: '',
		}

		this.onLogin = this.onLogin.bind(this)
	}

	onLogin() {
		const { email, password } = this.state

		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((result) => {
				console.log(result)
			})
			.catch((error) => {
				console.log(error)
			})
	}

	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<TextInput style={styles.inputField} placeholder="email Address" onChangeText={(email) => this.setState({ email })} />
				<TextInput style={styles.inputField} placeholder="Password" secureTextEntry={true} onChangeText={(password) => this.setState({ password })} />

				<Button onPress={() => this.onLogin()} title="Login!" />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	button: {
		alignSelf: 'center',
	},
	inputField: {
		fontSize: 24,
		margin: 5,
		marginBottom: 15,
	},
})

export default Login
