import React from "react";
// import search from '../../../Assets/Icon/search.svg';
import SearchIcon from "@material-ui/icons/Search";

class SearchTable extends React.Component {

	constructor(props, color) {
		super(props);

		let search;
		if(this.props.activeSearch.property === this.props.filter) {
			search = this.props.activeSearch.text;
		} else {
			search = "";
		}

		this.state = {
			search: search,
		}

		this.color = "action";
		this.myRef = React.createRef();
	}

	buttonSerchClick = (event) => {
		this.props.getActive(event);
		this.myRef.current.focus();
	}

	onChangeSearch = (event) => {
		this.setState({ search: event.target.value })
	}

	getSearchData = (event) => {
		// const activeButtonSearchIcon = event.target.closest('.search-block').previousSibling;
		if (!this.state.search) {
			this.props.onSearch('', '', event);
			this.props.onMountData(event);
			// activeButtonSearchIcon.querySelector('.MuiSvgIcon-colorAction').style.color = 'rgba(0, 0, 0, 0.54)';
			return
		}

		if (this.state.search.length > 0) {
			this.props.onSearch('', '', event);
			this.props.onMountData(event);
		}

		// const arrOfIcon = Array.from(document.body.querySelectorAll('.MuiSvgIcon-colorAction'));
		// arrOfIcon.forEach(item => item.style.color = 'rgba(0, 0, 0, 0.54)');
		// activeButtonSearchIcon.querySelector('.MuiSvgIcon-colorAction').style.color = '#3f51b5';
		this.props.onSearch(this.props.filter, this.state.search.toLowerCase(), event);
	}

	getAllData = (event) => {
		this.setState({ search: '' });
		this.props.onSearch('', '', event);
		this.props.onMountData(event);
		// const activeButtonSearchIcon = event.target.closest('.search-block').previousSibling;
		// activeButtonSearchIcon.querySelector('.MuiSvgIcon-colorAction').style.color = 'rgba(0, 0, 0, 0.54)';
	}

	keyDown = (event) => {
		// const activeButtonSearchIcon = event.target.closest('.search-block').previousSibling;

		if (event.key !== 'Enter') {
			return
		}

		if (!this.state.search) {
			this.props.onSearch('', '', event);
			this.props.onMountData(event);
			// activeButtonSearchIcon.querySelector('.MuiSvgIcon-colorAction').style.color = 'rgba(0, 0, 0, 0.54)';
			return
		}

		if (this.state.search.length > 0) {
			this.props.onSearch('', '', event);
			this.props.onMountData(event);
		}

		// const arrOfIcon = Array.from(document.body.querySelectorAll('.MuiSvgIcon-colorAction'));
		// arrOfIcon.forEach(item => item.style.color = 'rgba(0, 0, 0, 0.54)');
		// activeButtonSearchIcon.querySelector('.MuiSvgIcon-colorAction').style.color = '#3f51b5';
		this.props.onSearch(this.props.filter, this.state.search.toLowerCase(), event);
	}

	render() {
		if(this.props.activeSearch.property === this.props.filter) {
			this.color = "primary";
		} else {
			this.color = "action";
		}

		return (
			<React.Fragment>
				<button onClick={this.buttonSerchClick} className="button-search"><SearchIcon color={this.color} /></button>
				<div className="search-block">
					<input onChange={this.onChangeSearch} className="seach-input" type="text" placeholder="Search..." value={this.state.search} ref={this.myRef} onKeyDown={this.keyDown}></input>
					<div className="search-button-block">
						<button onClick={this.getSearchData} className="search-button-block-search">Search</button>
						<button onClick={this.getAllData} className="search-button-block-reset">Reset</button>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default SearchTable;
