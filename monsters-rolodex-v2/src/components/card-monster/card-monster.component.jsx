import "./card-monster.styles.css";

const CardMonster = ({ monster }) => {
	const { id, name, email } = monster;
	return (
		<div className="card-monster">
			<img alt={`monster ${name}`} src={`https://robohash.org/${id + 99}?set=set2&size=180x180`} />
			<h2>{name}</h2>
			<a href={`mailto:${email}`}>{email}</a>
		</div>
	);
};

export default CardMonster;
