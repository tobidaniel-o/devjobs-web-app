// searchbar will have three main search features for desktop and tablet view
// 1. Search by title
// 2. Search by location
// 3. Search by full time only --> checkbox
// 4. A search button

// searchbar for mobile
// 1. the searchbar will have just one feature - it will only be able to search by title

import { Search } from "../assets/icons/Icons";
import { Location } from "../assets/icons/Icons";
import "../base.css";
import classes from "./SearchForm.module.css";

const SearchForm = () => {
	return (
		<div className={classes.formWrapper}>
			<form>
				<div className={classes.firstinput}>
					<div>
						<Search />
					</div>
					<div>
						<label>
							<input
								type="text"
								placeholder="Filter by title, companies, expertise..."
								size="40"
								style={{ paddingLeft: "1rem" }}
							/>
						</label>
					</div>
				</div>
				<div className={classes.secondinput}>
					<div>
						<Location />
					</div>
					<label>
						<input
							type="text"
							placeholder="Filter by location..."
							style={{ paddingLeft: "1rem" }}
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
	);
};

export default SearchForm;
