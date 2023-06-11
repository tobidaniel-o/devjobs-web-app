import classes from "./CardList.module.css";
import Cards from "./Cards/Cards";

const CardList = ({ list }) => {
	return (
		<div className={classes.cardContainer}>
			<ul>
				{list.map((item) => {
					return <Cards key={item.id} item={item} />;
				})}
			</ul>
		</div>
	);
};


export default CardList;
