import SearchBar from "../SearchBar/SearchBar";
import LogoToggle from "./LogoToggle/LogoToggle";

const TopMain = () => {
	return (
		<div style={{ position: "relative", top: "-120px" }}>
			<LogoToggle />
			<SearchBar />
		</div>
	);
};

export default TopMain;
