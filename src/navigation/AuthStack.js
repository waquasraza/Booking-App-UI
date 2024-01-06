import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NavigationStrings from '../constants/NavigationStrings';
import {
	Login,
	Register,
	ChooseAccount,
	ForgotPassword,
	setPassword,
} from '../screens';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name={NavigationStrings.LOGIN} component={Login} />
			<Stack.Screen
				name={NavigationStrings.REGISTER}
				component={Register}
			/>
			<Stack.Screen
				name={NavigationStrings.CHOOSE_ACCOUNT}
				component={ChooseAccount}
			/>
			<Stack.Screen
				name={NavigationStrings.FORGOT_PASSWORD}
				component={ForgotPassword}
			/>
			<Stack.Screen
				name={NavigationStrings.SET_PASSWORD}
				component={setPassword}
			/>
		</Stack.Navigator>
	);
};

export default AuthStack;
