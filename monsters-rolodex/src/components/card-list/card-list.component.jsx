// notice how the author names this component structure
// there should only be one parent component per component
// multiple components per child component is discourage
// this is a child component and renders any child component if any
import { Component } from "react";
import "./card-list.styles.css";

class CardList extends Component {
	render() {
		console.log("card list render with props:", this.props);
		const { monsters } = this.props;
		return (
			<div className="card-list">
				{monsters.map((monster) => {
					const { id, name, email } = monster;
					return (
						<div className="card-container" key={id}>
							<img alt={`monster ${name}`} src={`https://robohash.org/${id + 99}?set=set2&size=180x180`} />
							<h2>{name}</h2>
							<a href={`mailto:${email}`}>{email}</a>
						</div>
					);
				})}
			</div>
		);
	}
}

export default CardList;
