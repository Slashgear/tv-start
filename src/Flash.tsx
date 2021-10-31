import {useCurrentFrame, spring, useVideoConfig, interpolate, Easing} from 'remotion';
import {BlackScreen} from './BlackScreen';


export const Flash: React.FC = () => {
	const frame = useCurrentFrame();

	const flash = interpolate(
		frame,
		[0, 10],
		[10, 1080],
		{
			easing: Easing.cubic
		}
	);

	const opacity = interpolate(
		frame - 15,
		[0, 10],
		[1, 0]
	)

	return (
		<BlackScreen>
			<div style={{ backgroundColor: 'white', width: 1920, height: flash, opacity}}/>
		</BlackScreen>
	);
};
