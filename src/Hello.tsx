import {useCurrentFrame, spring, useVideoConfig, interpolate} from 'remotion';
import {BlackScreen} from './BlackScreen';

import './font.css'

export const Hello: React.FC = () => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 15], [0, 1], {
		extrapolateRight: "clamp",
	});

	return (
		<BlackScreen>
			<div style={{ color: 'white', fontSize: '200px', opacity, fontFamily: 'Montserrat, sans-serif'}}>
				Hello Twitter !
			</div>
		</BlackScreen>
	);
};
