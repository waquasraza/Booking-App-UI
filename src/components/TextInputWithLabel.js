import {
	StyleSheet,
	View,
	Text,
	TextInput,
	Image,
	TouchableOpacity,
} from 'react-native';
import {
	scale,
	verticalScale,
	moderateScale,
	moderateVerticalScale,
} from 'react-native-size-matters';

import colors from '../styles/colors';

const TextInputWithLabel = ({
	label,
	placeholder,
	onChangeText = () => {},
	inputStyle,
	righIcon,
	onPressright,
	...props
}) => {
	return (
		<View style={[styles.inputStyle, inputStyle]}>
			<Text style={styles.lableTextStyle}>{label}</Text>
			<View style={styles.flexView}>
				<TextInput
					placeholder={placeholder}
					style={styles.inlineStyle}
					{...props}
				/>
				{righIcon ? (
					<TouchableOpacity
						activeOpacity={0.8}
						onPress={onPressright}
					>
						<Image
							source={righIcon}
							style={{
								width: 24,
								height: 18,
								tintColor: colors.blackOpacity30,
							}}
						/>
					</TouchableOpacity>
				) : null}
			</View>
		</View>
	);
};

export default TextInputWithLabel;

const styles = StyleSheet.create({
	inputStyle: {
		borderBottomWidth: 1,
		borderColor: colors.borderColor,
		// flexDirection: 'row',
		// justifyContent: 'space-between',
		// alignItems: 'center',
		// backgroundColor: 'red',
	},
	inlineStyle: {
		paddingVertical: moderateVerticalScale(10),
		fontSize: scale(18),
		color: colors.blackOpacity80,
		flex: 1,
	},
	lableTextStyle: {
		fontSize: scale(14),
		color: colors.blackOpacity50,
	},
	flexView: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});
