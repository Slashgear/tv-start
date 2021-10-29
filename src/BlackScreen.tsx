export const BlackScreen: React.FC = ({children}) => {
	return (
		<div style={{display: 'flex', flex: 1, backgroundColor: 'black',  justifyContent: "center", alignItems: "center"}}>
			{children}
		</div>
);
};
