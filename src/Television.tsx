import {Audio, Easing, interpolate, useCurrentFrame} from 'remotion';
import {Sequence} from 'remotion';
import {Beam} from './Beam';
import {BlackScreen} from './BlackScreen';
import {Flash} from './Flash';
import {Message} from './Message';
import {Snow} from './Snow';


import tv from "../assets/tv-sound.mp3";
import halloween from "../assets/halloween.mp3";

export const Television: React.FC = () => {

	return (
		<div>
			<Sequence durationInFrames={30} from={0}>
				<BlackScreen/>
			</Sequence>
			<Sequence durationInFrames={20} from={30}>
				<Beam/>
			</Sequence>
			<Sequence durationInFrames={30} from={50}>
				<Flash/>
			</Sequence>
			<Sequence from={30} durationInFrames={80}>
				<Audio
					src={tv}
					volume={f => interpolate(f , [0, 40, 80], [0, 1, 0], { extrapolateLeft: "clamp", easing: Easing.cubic })}
					startFrom={0}
					endAt={80}
				/>
			</Sequence>
			<Sequence from={70} durationInFrames={20}>
				<Snow/>
			</Sequence>
			<Sequence durationInFrames={280} from={90}>
				<Message message="Happy Halloween !"/>
			</Sequence>
			<Sequence from={70} durationInFrames={240}>
				<Audio
					src={halloween}
					volume={f => interpolate(f , [0, 100, 200, 240], [0, 1, 1, 0])}
					startFrom={200}
					endAt={440}
				/>
			</Sequence>
		</div>
	);
};
