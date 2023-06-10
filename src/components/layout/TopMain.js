import SearchBar from "../SearchBar/SearchBar";
import LogoToggle from "./LogoToggle/LogoToggle";
import Card from "../Card/Card";

const TopMain = () => {
	return (
		<>
			<div style={{ position: "relative", top: "-120px" }}>
				<LogoToggle />
				<SearchBar />
			</div>
			<Card />
		</>
	);
};

export default TopMain;
