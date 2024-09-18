// notice how the author names this component structure
// there should only be one parent component per component
// multiple components per child component is discourage
import { Component } from "react";

class CardList extends Component {
	render() {
		return <div>Hello There! from CardList</div>;
	}
}

export default CardList;
