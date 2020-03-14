import { connect } from 'react-redux';

import FilterlTable from '../Component/FilterTable/FilterTable';
import { sortTable, selectRoleStudent, fetchData, fetchAllData, SearchStudent, SearchForAllStudent, StartselectRoleStudent, sortShiftTable } from '../store/Action/action';


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

const ConnectFilterlTable = connect(null, mapDispatchToProps)(FilterlTable)

export default ConnectFilterlTable;
