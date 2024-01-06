import React, { useState } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Button,
	ImageBackground,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import { moderateVerticalScale } from 'react-native-size-matters';

import ButtonComp from '../../components/ButtonComp';
import ImagePath from '../../constants/ImagePath';
import NavigationStrings from '../../constants/NavigationStrings';
import styles from './styles';
import TextInputWithLabel from '../../components/TextInputWithLabel';

const Login = ({ navigation }) => {
	const [isVisible, setIsVisible] = useState(true);

	return (
		<View style={styles.container}>
			<View>
				{/* Banner */}
				<ImageBackground
					source={{
						uri: 'https://static.vecteezy.com/system/resources/thumbnails/032/706/674/small_2x/sleeping-newborn-baby-in-a-wrap-ai-generative-free-photo.jpg',
					}}
					style={styles.bannerBackgroundImage}
				>
					<Text style={styles.bannerText}>Login</Text>
				</ImageBackground>

				{/* main area */}
				<View style={styles.mainArea}>
					<TextInputWithLabel
						label="Email Address"
						placeholder="Enter your email"
						inputStyle={{ marginBottom: moderateVerticalScale(28) }}
						keyboardType="email-address"
					/>

					<TextInputWithLabel
						label="Password"
						placeholder="Enter your password"
						secureTextEntry={isVisible}
						righIcon={
							isVisible ? ImagePath.hideEye : ImagePath.showEye
						}
						onPressright={() => setIsVisible(!isVisible)}
					/>
					<TouchableOpacity
						style={styles.forgotView}
						activeOpacity={0.7}
					>
						<Text style={styles.forgotText}>Forgot Password</Text>
					</TouchableOpacity>
					<ButtonComp btnText="Login" />
				</View>
			</View>

			<View style={styles.bottomView}>
				<Text>Not a member?</Text>
				<TouchableOpacity
					onPress={() =>
						navigation.navigate(NavigationStrings.CHOOSE_ACCOUNT)
					}
				>
					<Text>Join Now</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Login;
