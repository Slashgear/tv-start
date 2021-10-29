import {Series} from 'remotion';
import {Beam} from './Beam';
import {BlackScreen} from './BlackScreen';
import {Flash} from './Flash';
import {Hello} from './Hello';

export const Television: React.FC = () => {

	return (
		<Series>
			<Series.Sequence durationInFrames={30}>
				<BlackScreen/>
			</Series.Sequence>
			<Series.Sequence durationInFrames={20}>
				<Beam/>
			</Series.Sequence>
			<Series.Sequence durationInFrames={30}>
				<Flash/>
			</Series.Sequence>
			<Series.Sequence offset={-10} durationInFrames={100}>
				<Hello/>
			</Series.Sequence>
		</Series>
	);
};
