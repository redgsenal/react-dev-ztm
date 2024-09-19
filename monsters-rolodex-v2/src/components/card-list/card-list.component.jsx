// notice how the author names this component structure
// there should only be one parent component per component
// multiple components per child component is discourage
// this is a child component and renders any child component if any
import CardMonster from "../card-monster/card-monster.component.jsx";
import "./card-list.styles.css";

const CardList = ({ monsters }) => (
	<div className="card-list">
		{monsters.map((monster) => {
			return (
				<div className="card-container" key={monster.id}>
					<CardMonster monster={monster} />
				</div>
			);
		})}
	</div>
);

export default CardList;
