import classes from './Cards.module.css'

const Cards = ({ item }) => (
	<li>
		<a href={item.website} target="_blank" rel="noreferrer">
			<div
				className={classes.logo}
				style={{
					backgroundColor: `${item.logoBackground}`,
				}}
			>
				<img src={item.logo} alt="" />
			</div>
			<div className={classes.postAndContract}>
				<div className={classes.postedAt}>{`${item.postedAt}`}</div>
				<span
					style={{
						marginTop: "-5px",
						marginBottm: "-5px",
						fontWeight: "strong",
						fontSize: "20px",
					}}
				>
					.
				</span>
				<div className={classes.contract}>{`${item.contract}`}</div>
			</div>
			<div className={classes.position}>{`${item.position}`}</div>
			<div className={classes.company}>{item.company}</div>
			<div className={classes.location}>{item.location}</div>
		</a>
	</li>
);

export default Cards