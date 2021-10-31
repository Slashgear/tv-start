import {BlackScreen} from './BlackScreen';
import {interpolate, useCurrentFrame} from 'remotion';

export const Snow: React.FC = () => {
	const frame = useCurrentFrame();

	const snow = interpolate(frame,[0, 15], [0, -100]);

	const opacity = interpolate(frame - 10, [0, 5], [0.6, 0.3])

	return (
		<BlackScreen>
			<svg viewBox='0 0 1000 250' xmlns='http://www.w3.org/2000/svg' style={{ height: '100%', transform: `translateX(${snow}px)`, opacity}}>
				<filter id='noiseFilter'>
					<feTurbulence
						type='fractalNoise'
						baseFrequency='0.65'
						numOctaves='3'
						stitchTiles='stitch'/>
				</filter>

				<rect width='100%' height='100%' filter='url(#noiseFilter)'/>
			</svg>
		</BlackScreen>
)
}