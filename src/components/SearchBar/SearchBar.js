// searchbar will have three main search features for desktop and tablet view
// 1. Search by title
// 2. Search by location
// 3. Search by full time only --> checkbox
// 4. A search button

// searchbar for mobile
// 1. the searchbar will have just one feature - it will only be able to search by title

import "../../base.css";
import classes from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

const SearchBar = ({ onSearch, onSearchLocation, allSearch, location }) => {
	return (
		<>
			<div className={classes.formWrapper}>
				<form>
					<div className={classes.firstinput}>
						<div>
							<FaSearch
								color="#5964E0"
								fontWeight="bold"
								size="20"
								style={{
									marginTop: "6px",
								}}
							/>
						</div>
						<div>
							<label>
								<input
									type="text"
									placeholder="Filter by title, companies, expertise..."
									size="40"
									style={{ paddingLeft: "0.5rem" }}
									onChange={onSearch}
									// value={allSearch}
								/>
							</label>
						</div>
					</div>
					<div className={classes.secondinput}>
						<div>
							<FaMapMarkerAlt
								color="#5964E0"
								fontWeight="bold"
								size="20"
								style={{
									marginTop: "6px",
								}}
							/>
						</div>
						<label>
							<input
								type="text"
								placeholder="Filter by location..."
								style={{ paddingLeft: "0.5rem" }}
								onChange={onSearchLocation}
								// value={location}
							/>
						</label>
					</div>
					<div className={classes.thirdinput}>
						<label>
							<input type="checkbox" name="fullTime" />
							&nbsp; Full Time Only
						</label>

						<button type="submit">Search</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default SearchBar;
