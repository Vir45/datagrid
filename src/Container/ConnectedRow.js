import { connect } from 'react-redux';
import { fetchData, DeletStudent, fetchAllData, DeletSelectedStudent} from '../store/Action/action';
import Row from '../Component/FullRowList/Row/Row';

const mapStateToProps = state => {
	return {
		dataStudent: state.dataTable.students,
		activeColumn: state.dataTable.sort.property,
	}
};

const mapDispatchToProps = dispatch => ({
	onDeletStudent: (item) => {dispatch(DeletStudent(item))},
});

const ConnectedRow = connect(mapStateToProps, mapDispatchToProps)(Row);

export default ConnectedRow;
