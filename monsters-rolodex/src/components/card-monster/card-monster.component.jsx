import { Component } from "react";
import "./card-monster.styles.css";

class CardMonster extends Component {
	render() {
		const { id, name, email } = this.props;
		return (
			<div className="card-monster">
				<img alt={`monster ${name}`} src={`https://robohash.org/${id + 99}?set=set2&size=180x180`} />
				<h2>{name}</h2>
				<a href={`mailto:${email}`}>{email}</a>
			</div>
		);
	}
}

export default CardMonster;
