import { connect } from 'react-redux';

import FilterlTable from '../Component/FilterTable/FilterTable';
import { sortTable, selectRoleStudent, fetchData, fetchAllData, SearchStudent, SearchForAllStudent, StartselectRoleStudent } from '../store/Action/action';


const mapDispatchToProps = dispatch => ({
	onSort: (property, direction) => dispatch(sortTable(property, direction)),
	onSelect: (property) => dispatch(selectRoleStudent(property)),
	onStartSelect: (property) => dispatch(StartselectRoleStudent(property)),
	onMount: () => { dispatch(fetchData()) },
	onMountAll: () => {dispatch(fetchAllData())},
	onSearch: (property, text) => dispatch(SearchStudent(property, text)),
	onAllSearch: (text) => dispatch(SearchForAllStudent(text)),
})

const ConnectFilterlTable = connect(null, mapDispatchToProps)(FilterlTable)

export default ConnectFilterlTable;
