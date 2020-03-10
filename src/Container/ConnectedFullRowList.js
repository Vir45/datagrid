import { connect } from 'react-redux';
import FullList from '../Component/FullRowList/FullRowList';
// import { Actions } from '../store/Action/actionTypes';
import { fetchData, DeletStudent, fetchAllData, DeletSelectedStudent} from '../store/Action/action';

// const getVisibleFullList = (fulllist, filter) => {
// 	switch (filter.sort.length) {
// 		case 2:
// 			const itemSort = filter.sort[0].toLowerCase();
// 			const itemDirection = filter.sort[1].toLowerCase();
// 			const newFulllist = Object.assign({}, fulllist);
// 			if (itemDirection === 'up') {
// 				newFulllist.data.sort((a, b) => a[itemSort] > b[itemSort] ? 1 : -1)
// 			} else if (itemDirection === 'down') {
// 				newFulllist.data.sort((a, b) => a[itemSort] > b[itemSort] ? -1 : 1)
// 			}
// 			return newFulllist;
// 		case 'SHOW_ACTIVE':
// 			return fulllist
// 		case 'SHOW_ALL':
// 		default:
// 			return fulllist
// 	}
// }

// const mapStateToProps = state => ({
// 	data: getVisibleFullList(state.student, state.controlTable)
// })

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
