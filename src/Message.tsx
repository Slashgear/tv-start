import {useCurrentFrame, spring, useVideoConfig, interpolate} from 'remotion';
import {BlackScreen} from './BlackScreen';

import './font.css'

export const Message: React.FC<{message: string}> = ({ message }) => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();
	const opacity = interpolate(frame, [0, 15], [0, 1], {
		extrapolateRight: "clamp",
	});

	const scale = spring({ frame, fps: videoConfig.fps, from: 0, to: 1})

	return (
		<BlackScreen>
			<h1 style={{ color: 'white', fontSize: '150px', opacity, fontFamily: 'Montserrat, sans-serif', transform: `scale(${scale})`, }}>
				{message}
			</h1>
		</BlackScreen>
	);
};
