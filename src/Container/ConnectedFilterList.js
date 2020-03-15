import { connect } from 'react-redux';

import FilterlTable from '../Component/FilterTable/FilterTable';
import { sortTable, selectRoleStudent, fetchData, fetchAllData, SearchStudent, SearchForAllStudent, StartselectRoleStudent, sortShiftTable } from '../store/Action/action';

const mapStateToProps = state => {
	return {
		sort: state.dataTable.sort,
		searchinAllTable: state.dataTable.searchinAllTable,
		searchTerm: state.dataTable.searchTerm,
	}
};

const mapDispatchToProps = dispatch => ({
	onSort: (property, direction) => dispatch(sortTable(property, direction)),
	onSelect: (property) => dispatch(selectRoleStudent(property)),
	onStartSelect: (property) => dispatch(StartselectRoleStudent(property)),
	onMount: () => { dispatch(fetchData()) },
	onMountAll: () => {dispatch(fetchAllData())},
	onSearch: (property, text) => dispatch(SearchStudent(property, text)),
	onAllSearch: (text) => dispatch(SearchForAllStudent(text)),
	onSortSfift: (property, direction, nextProperty, nextDirection) => dispatch(sortShiftTable(property, direction, nextProperty, nextDirection)),
})

const ConnectFilterlTable = connect(mapStateToProps, mapDispatchToProps)(FilterlTable)

export default ConnectFilterlTable;
