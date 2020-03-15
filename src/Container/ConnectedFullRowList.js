import { connect } from 'react-redux';
import FullList from '../Component/FullRowList/FullRowList';
import { fetchData, DeletStudent, fetchAllData, DeletSelectedStudent} from '../store/Action/action';

const mapStateToProps = state => {
	return {
		data: state.dataTable,
		active: state.dataTable.sort.property,
	}
};

const mapDispatchToProps = dispatch => ({
	onMount: () => { dispatch(fetchData()) },
	onDeletStudent: (item) => {dispatch(DeletStudent(item))},
	onAllMount: () => { dispatch(fetchAllData()) },
	onDeletSelectedStudent: (item) => {dispatch(DeletSelectedStudent(item))},
});

const ConnectedFullRowList = connect(mapStateToProps, mapDispatchToProps)(FullList);

export default ConnectedFullRowList;
