import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

function Landing({ navigation }) {
	return (
		<View style={styles.landingView}>
			<Text style={styles.welcomeText}>Welcome to ProCras!</Text>
			<View style={styles.button}>
				<Button title="Register" onPress={() => navigation.navigate('Register')} />
			</View>
			<View>
				<Button title="Login" onPress={() => navigation.navigate('Login')} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	landingView: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	},
	welcomeText: {
		alignSelf: 'center',
		margin: 20,
	},
	button: {
		marginBottom: 5,
	},
})

export default Landing
