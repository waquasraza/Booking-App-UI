import { StyleSheet } from 'react-native';
import {
	scale,
	verticalScale,
	moderateScale,
	moderateVerticalScale,
} from 'react-native-size-matters';
import colors from '../../styles/colors';

export default styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
	},

	bannerBackgroundImage: {
		width: '100%',
		height: moderateScale(200),
		justifyContent: 'center',
		alignItems: 'center',
	},
	bannerText: {
		fontSize: scale(32),
		color: '#fff',
		fontWeight: 'bold',
	},

	bottomView: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: moderateVerticalScale(72),
		marginBottom: moderateVerticalScale(44),
	},

	forgotText: {
		fontSize: scale(16),
		color: colors.theme,
		fontWeight: '400',
	},

	forgotView: {
		alignSelf: 'flex-end',
		marginVertical: moderateVerticalScale(24),
	},

	mainArea: {
		paddingTop: moderateVerticalScale(40),
		paddingHorizontal: moderateScale(24),
	},
});
