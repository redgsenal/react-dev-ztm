// this css will be bundled with App.css and will be available for the whole site
// this will be easier to code CSS that is specific for this component
import "./search-box.styles.css";

const SearchBox = ({ className, placeHolder, onChangeHandler }) => (
	<input
		className={`monsters-search-box ${className}`}
		type="search"
		placeholder={placeHolder}
		onChange={onChangeHandler}
	/>
);

export default SearchBox;
