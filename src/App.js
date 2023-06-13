import "./App.css";
import Header from "./components/layout/Header/Header";
import LogoToggle from "./components/layout/LogoToggle/LogoToggle";
import SearchBar from "./components/SearchBar/SearchBar";
import CardList from "./components/CardList/CardList";
import { jobsData } from "./data";
import { useEffect, useState } from "react";

function App() {
	const [searchTerm, setSearchTerm] = useState("");
	const [searchByLocation, setSearchByLocation] = useState("");
	const [searchResult, setSearchResult] = useState(jobsData);

	const handleChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleJobLocationChange = (e) => {
		setSearchByLocation(e.target.value);
	};

	const searchedJobDetails = jobsData.filter(
		(searchedJob) =>
			searchedJob.company
				.toLowerCase()
				.includes(searchTerm.toLowerCase()) ||
			searchedJob.position
				.toLowerCase()
				.includes(searchTerm.toLowerCase())
	);

	const searchedJobByLocation = jobsData.filter((jobByLocation) =>
		jobByLocation.location
			.toLowerCase()
			.includes(searchByLocation.toLowerCase())
	);



	// useEffect(() => {
	// 	setSearchResult(searchedJobDetails);
	// 	setSearchResult(searchedJobByLocation);
	// }, [searchedJobDetails, searchedJobByLocation, setSearchResult]);

	// useEffect(() => {
	// 	setSearchResult(searchedJobByLocation);
	// }, [searchedJobByLocation, setSearchResult]);

	return (
		<>
			<Header />
			<div className="wrapper">
				<div style={{ position: "relative", top: "-120px" }}>
					<LogoToggle />
					<SearchBar
						onSearch={handleChange}
						onSearchLocation={handleJobLocationChange}
					/>
				</div>
				<CardList list={searchResult} />
			</div>
		</>
	);
}

export default App;
