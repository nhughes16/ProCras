import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator, DrawerItems } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createAppContainer } from 'react-navigation'

import Icons from '@expo/vector-icons/Ionicons'
import colors from '../shared/colors'

import AddProjectScreen from './AddProject'
import HomeScreen from './Home'

//const AppNavigator = createAppContainer(MainNavigator)

const Tab = createBottomTabNavigator()

class Main extends Component {
	render() {
		return (
			<NavigationContainer>
				<Tab.Navigator
					screenOptions={({ route }) => ({
						tabBarIcon: ({ focused }) => {
							let iconName = 'home'
							let iconColor = colors.gray

							if (route.name === 'Home') {
								iconName = focused ? 'apps' : 'apps-outline'
								iconColor = focused ? colors.green : colors.gray
							} else if (route.name === 'AddProject') {
								iconName = focused ? 'add-circle' : 'add-circle-outline'
								iconColor = focused ? colors.green : colors.gray
							}

							// You can return any component that you like here!
							return <Icons name={iconName} size={34} color={iconColor} />
						},
					})}
					tabBarOptions={{
						activeTintColor: colors.green,
						inactiveTintColor: colors.gray,
						showLabel: true,
					}}
				>
					<Tab.Screen name="Home" component={HomeScreen} />
					<Tab.Screen name="AddProject" component={AddProjectScreen} />
				</Tab.Navigator>
			</NavigationContainer>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
		alignItems: 'center',
		justifyContent: 'center',
	},
	divider: {
		backgroundColor: colors.green,
		flex: 1,
		height: 1,
		alignSelf: 'center',
	},
	title: {
		color: colors.pink,
		fontSize: 36,
		margin: 36,
	},
	title2: {
		fontWeight: 'bold',
		color: colors.gray,
	},
})

export default Main
