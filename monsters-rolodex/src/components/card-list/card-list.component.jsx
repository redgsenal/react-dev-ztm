// notice how the author names this component structure
// there should only be one parent component per component
// multiple components per child component is discourage
// this is a child component and renders any child component if any
import { Component } from "react";
import CardMonster from "../card-monster/card-monster.component.jsx";
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
							<CardMonster id={id} name={name} email={email} />
						</div>
					);
				})}
			</div>
		);
	}
}

export default CardList;
