import {Composition, } from 'remotion';
import {Television} from './Television';
import {BlackScreen} from './BlackScreen';


export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition width={1920} height={1080} id="Television" component={Television} fps={30} durationInFrames={300}/>
		</>
	);
};
