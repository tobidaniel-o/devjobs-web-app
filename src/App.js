import "./App.css";
import Header from "./components/layout/Header/Header";
import LogoToggle from "./components/layout/LogoToggle/LogoToggle";
import SearchBar from "./components/SearchBar/SearchBar";
import Card from "./components/CardList/CardList";

function App() {
	return (
		<>
			<Header />
			<div className="wrapper">
				<div style={{ position: "relative", top: "-120px" }}>
					<LogoToggle />
					<SearchBar />
				</div>
				<Card />
			</div>
		</>
	);
}

export default App;
