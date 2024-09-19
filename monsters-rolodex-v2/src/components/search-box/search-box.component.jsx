import { Component } from "react";
// this css will be bundled with App.css and will be available for the whole site
// this will be easier to code CSS that is specific for this component
import "./search-box.styles.css";

class SearchBox extends Component {
	render() {
		return (
			<input
				className={`monsters-search-box ${this.props.className}`}
				type="search"
				placeholder={this.props.placeHolder}
				onChange={this.props.onChangeHandler}
			/>
		);
	}
}

export default SearchBox;
