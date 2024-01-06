import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import {
	moderateScale,
	moderateVerticalScale,
	scale,
} from 'react-native-size-matters';
import colors from '../styles/colors';

const ButtonComp = ({ btnText, btnStyle, btnTextStyle, onPress }) => {
	return (
		<TouchableOpacity
			style={[styles.buttonStyle, btnStyle]}
			activeOpacity={0.8}
			onPress={onPress}
		>
			<Text style={[styles.buttonTextStyle, btnTextStyle]}>
				{btnText}
			</Text>
		</TouchableOpacity>
	);
};

export default ButtonComp;

const styles = StyleSheet.create({
	container: {},
	buttonStyle: {
		height: moderateScale(48),
		backgroundColor: colors.theme,
		borderRadius: moderateScale(4),
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonTextStyle: {
		fontSize: scale(12),
		color: 'white',
		textTransform: 'uppercase',
		fontWeight: 'bold',
	},
});
