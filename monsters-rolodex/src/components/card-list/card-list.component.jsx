// notice how the author names this component structure
// there should only be one parent component per component
// multiple components per child component is discourage
import { Component } from "react";

class CardList extends Component {
	render() {
		console.log("card list render with props:", this.props);
		const { monsters } = this.props;

		return (
			<div>
				{monsters.map((monster) => (
					<h1 key={monster.id}>{monster.name}</h1>
				))}
			</div>
		);
	}
}

export default CardList;
