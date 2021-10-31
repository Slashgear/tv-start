import {useCurrentFrame, spring, useVideoConfig, interpolate, Easing} from 'remotion';
import {BlackScreen} from './BlackScreen';


export const Beam: React.FC = () => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();


	const beam = interpolate(
		frame,
		[0, 10],
		[0, 1920],
		{
			easing: Easing.ease
		}
	);

	const opacity = interpolate(
		frame - 10,
		[0, 5, 10],
		[1, 0, 1]
	)

	return (
		<BlackScreen>
			<div style={{ backgroundColor: 'white', width: beam, height: 10, opacity}}/>
		</BlackScreen>
	);
};
