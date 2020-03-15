import React from "react";


class SearchInAllTable extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			search: this.props.searchinAllTable,
		}

		this.myRef = React.createRef();
	}

	componentDidMount () {
		this.myRef.current.focus();
	}

	onChangeSearch = (event) => {
		this.setState({search: event.target.value})
	}

	getSearchData = (event) => {
		if(!this.state.search) {
			this.props.onAllSerch('');
			this.props.onMountData(event);
			return
		}

		if(this.state.search.length > 0) {
			this.props.onAllSerch('');
			this.props.onMountData(event);
		}

		this.props.onAllSerch(this.state.search.toLowerCase());
	}

	getAllData = (event) => {
		this.setState({search: ''});
		this.props.onAllSerch('');
		this.props.onMountData(event);
	}

	keyDown = (event) => {
     if(event.key !== 'Enter') {
			 return
		 }

		 if(!this.state.search) {
			this.props.onAllSerch('');
			this.props.onMountData(event);
			return
		}

		if(this.state.search.length > 0) {
			this.props.onAllSerch('');
			this.props.onMountData(event);
		}

		this.props.onAllSerch(this.state.search.toLowerCase());
	}

	render() {
		
		return (
			<div className="search-all-table">
				<input onChange={this.onChangeSearch} className="search-all-input" type="text" placeholder="Search..." value={this.state.search} ref={this.myRef} onKeyDown={this.keyDown}></input>
				<div className="search-all-button-block">
					<button onClick={this.getSearchData} className="search-button-block-search">Search</button>
					<button onClick={this.getAllData} className="search-button-block-reset">Reset</button>
				</div>
			</div>
		)
	}
}

export default SearchInAllTable;
