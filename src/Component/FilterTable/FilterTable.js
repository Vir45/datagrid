import React from "react";

import './FilterTable.css'
import Switches from './FilterSwitch/FilterSwitch';
import SearchTable from './SearchTable/SearchTable';
import SearchInAllTable from './SearchInAllTable/SearchInAllTable';
import MultipleSelect from './MultipleSelect/MultipleSelect';

class FilterlTable extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activeFilter: '',
			direction: '',
			activeStudent: 'true',
			activeSearch: {
				property: this.props.searchTerm.property,
				text: this.props.searchTerm.text,
			},
			loading: true,
		}
	}

	componentDidMount() {
		let { property, direction } = this.props.sort;
		if(property.length > 0 && direction.length > 0) {
		const arr = Array.from(document.body.querySelector('.filter-table').children);
		arr.forEach(item => {
			if (item.classList[0].includes(property)) {
				item.classList.add('active');
				const arrOfDirection = Array.from(item.querySelector('.column-direction').children);
				for (let item of arrOfDirection) {
					if (item.value.split(', ')[1] === direction) {
						item.classList.add('active-direction')
					}
				}
			}
		})
	}
	}

	getActive = (elem, activeDirection) => {
		const arr = Array.from(document.body.querySelector('.filter-table').children);
		arr.forEach(item => { if (item.classList.contains('active')) item.classList.remove('active') });
		arr.forEach(item => { if (item.classList.contains('shift-active')) item.classList.remove('shift-active') });
		elem.classList.add('active');
		const arrOfDirection = Array.from(elem.querySelector('.column-direction').children);

		for (let item of arrOfDirection) {
			if (item.classList.contains('active-direction')) {
				item.classList.remove('active-direction')
			}
		}

		for (let item of arrOfDirection) {
			if (item.value.split(', ')[1] === activeDirection) {
				item.classList.add('active-direction')
			}
		}

	}

	startSort = (event) => {

		if (event.shiftKey && this.state.direction.length > 0) {
			const activeSort = this.state.activeFilter;
			const activeDirection = this.state.direction;
			let target = event.target.closest('button');
			if (!target) return;
			const newActiveElem = event.currentTarget;
			const direction = target.value.split(', ');
			const newActiveactiveSort = direction[0];
			const newActiveDirection = direction[1];
			const arr = Array.from(document.body.querySelector('.filter-table').children);
			arr.forEach(item => { if (item.classList.contains('shift-active')) item.classList.remove('shift-active') });
			newActiveElem.classList.add('shift-active');
			const arrOfDirection = Array.from(newActiveElem.querySelector('.column-direction').children);

			for (let item of arrOfDirection) {
				if (item.classList.contains('active-direction')) {
					item.classList.remove('active-direction')
				}
			}

			for (let item of arrOfDirection) {
				if (item.value.split(', ')[1] === newActiveDirection) {
					item.classList.add('active-direction')
				}
			}

			this.props.onSortSfift(activeSort, activeDirection, newActiveactiveSort, newActiveDirection);
			event.target.blur();
			return;
		}

		let target = event.target.closest('button');
		if (!target) return;
		const direction = target.value.split(', ');
		const activeElem = event.currentTarget;
		const activeDirection = direction[1];
		this.setState({ activeFilter: direction[0], direction: direction[1] })
		this.getActive(activeElem, activeDirection);
		this.props.onSort(direction[0], direction[1]);
		event.target.blur();
	}

	startSelect = (value) => {

		if (value.length === 0) {
			value = ["all students"];
		}

		if (value.includes('all students')) {
			this.props.onStartSelect([])
			if (this.state.activeStudent) {
				this.props.onMount();
			} else {
				this.props.onMountAll();
			}
			document.body.querySelector('.role-filter .column-direction').style.border = 'none'
			return
		}

		this.props.onStartSelect(value)
		document.body.querySelector('.role-filter .column-direction').style.border = '1px solid #1890ff '

		if (this.state.activeStudent) {
			this.props.onMount();
		} else {
			this.props.onMountAll();
		}

		this.props.onSelect(value);
	}

	getAllstudents = () => {
		this.props.onMountAll();
		this.setState({ activeStudent: false });
	}

	getActivestudents = () => {
		this.props.onMount();
		this.setState({ activeStudent: true });
	}

	serchClick = (event) => {
		event.stopPropagation()
		const parent = event.target.closest('div');
		const searchBlock = parent.querySelector('.search-block');
		if (searchBlock.style.display === '') {
			searchBlock.style.display = 'block';
		} else {
			searchBlock.style.display = ''
		}
		event.currentTarget.blur()
	}

	onSearchStudent = (property, text, event) => {
		event.stopPropagation();
		this.props.onSearch(property, text);
		this.setState({
			activeSearch: {
				property,
				text,
			}
		})
	}

	getData = (event) => {
		event.stopPropagation();
		if (this.state.activeStudent) {
			this.props.onMount();
		} else {
			this.props.onMountAll();
		}
	}

	render() {

		return (
			<div>
				<div className="row-1">
					<Switches onTrue={this.getActivestudents} onFalse={this.getAllstudents} />
					<SearchInAllTable onAllSerch={this.props.onAllSearch} onMountData={this.getData} searchinAllTable={this.props.searchinAllTable} />
				</div>
				<div className="filter-table">
					<div className="position-filter" onClick={this.startSort}>
						<div className="column-direction">
							<button className="button-up" value={'position, UP'}>&#9650;</button>
							<button className="button-down" value={'position, DOWN'}>&#9660;</button>
						</div>
					</div>

					<div className="name-filter" onClick={this.startSort}>
						<div className="about-block">
							<p className="column-name">Name</p>
							<div className="column-direction">
								<button className="button-up" value={'name, UP'}>&#9650;</button>
								<button className="button-down" value={'name, DOWN'}>&#9660;</button>
							</div>
						</div>
						<div className="column-search">
							<SearchTable getActive={this.serchClick} filter={'name'} onSearch={this.onSearchStudent} onMountData={this.getData} activeSearch={this.state.activeSearch} />
						</div>
					</div>

					<div className="githubId-filter" onClick={this.startSort}>
						<div className="about-block">
							<p className="column-name">GitHub</p>
							<div className="column-direction">
								<button className="button-up" value={'githubId, UP'}>&#9650;</button>
								<button className="button-down" value={'githubId, DOWN'}>&#9660;</button>
							</div>
						</div>
						<div className="column-search">
							<SearchTable getActive={this.serchClick} filter={'githubId'} onSearch={this.onSearchStudent} onMountData={this.getData} activeSearch={this.state.activeSearch} />
						</div>
					</div>

					<div className="score-filter" onClick={this.startSort}>
						<div className="about-block">
							<p className="column-name">Score</p>
							<div className="column-direction">
								<button className="button-up" value={'score, DOWN'}>&#9650;</button>
								<button className="button-down" value={'score, UP'}>&#9660;</button>
							</div>
						</div>
					</div>

					<div className="locationName-filter" onClick={this.startSort}>
						<div className="about-block">
							<p className="column-name">City</p>
							<div className="column-direction">
								<button className="button-up" value={'locationName, UP'}>&#9650;</button>
								<button className="button-down" value={'locationName, DOWN'}>&#9660;</button>
							</div>
						</div>
						<div className="column-search">
							<SearchTable getActive={this.serchClick} filter={'locationName'} onSearch={this.onSearchStudent} onMountData={this.getData} activeSearch={this.state.activeSearch} />
						</div>
					</div>

					<div className="role-filter">
						<div className="about-block">
							<div className="column-direction">
								<MultipleSelect onselect={this.startSelect} />
							</div>
						</div>
					</div>

					<div className="date-filter" onClick={this.startSort}>
						<div className="about-block">
							<p className="column-name">Date</p>
							<div className="column-direction">
								<button className="button-up" value={'date, UP'}>&#9650;</button>
								<button className="button-down" value={'date, DOWN'}>&#9660;</button>
							</div>
						</div>
					</div>

					<div className="companyName-filter" onClick={this.startSort}>
						<div className="about-block">
							<p className="column-name">CompanyName</p>
							<div className="column-direction">
								<button className="button-up" value={'companyName, UP'}>&#9650;</button>
								<button className="button-down" value={'companyName, DOWN'}>&#9660;</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}


export default FilterlTable;
