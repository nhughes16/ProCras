import React, { Component } from 'react'
import { Text, View, TextInput, Button, StyleSheet } from 'react-native'

import firebase from 'firebase'

export default class Register extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			user: '',
			password: '',
			fname: '',
			lname: '',
		}

		this.onRegister = this.onRegister.bind(this)
	}

	onRegister() {
		const { email, user, password, fname, lname } = this.state

		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((result) => {
				firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).set({
					email,
					fname,
					lname,
					user,
				})
				console.log(result)
			})
			.catch((error) => {
				console.log(error)
			})
	}

	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<TextInput placeholder="First Name" onChangeText={(fname) => this.setState({ fname })} />
				<TextInput placeholder="Last Name" onChangeText={(lname) => this.setState({ lname })} />
				<TextInput placeholder="email Address" onChangeText={(email) => this.setState({ email })} />
				<TextInput placeholder="UserName" onChangeText={(user) => this.setState({ user })} />
				<TextInput placeholder="Password" secureTextEntry={true} onChangeText={(password) => this.setState({ password })} />

				<Button onPress={() => this.onRegister()} title="Register Now!" />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	button: {
		alignSelf: 'center',
	},
})
