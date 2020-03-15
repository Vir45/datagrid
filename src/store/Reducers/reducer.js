
import { combineReducers } from 'redux'
import { Actions } from '../Action/actionTypes';


let defaultTableState = {
	students: [],
	sort: {
		property: '',
		direction: ''
	},
	sortShift: {
		property: '',
		direction: ''
	},
	searchTerm: {
		property: '',
		text: '',
	},
	searchinAllTable: '',
	selectTypes: [],
	deletedStudent: '',
	errors: [],
};


const dataTable = (state = defaultTableState, action) => {
	switch (action.type) {
		case (Actions.FETCH_DATA):
			return { ...state };
		case (Actions.FETCH_DATA_SUCCESS):
			return { ...state, students: action.payLoad };
		case (Actions.TABLE_SORT_SUCCESS):
			return { ...state, students: action.payLoad.students, sort: action.payLoad.sort };
		case (Actions.TABLE_SHIFT_SORT_SUCCESS):
			return { ...state, students: action.payLoad};
		case (Actions.START_TABLE_SELECT_ROLE):
			return { ...state, selectTypes: action.payLoad};
		case (Actions.TABLE_SELECT_ROLE):
			return { ...state, students: action.payLoad.newStudents, selectTypes: action.payLoad.selectTypes  };
		case (Actions.FETCH_ALL_DATA_SUCCESS):
			return { ...state, students: action.payLoad };
		case (Actions.TABLE_SEARCH):
			return { ...state, students: action.search.newStudents, searchTerm: action.search.searchTerm };
		case (Actions.TABLE_ALL_SEARCH):
			return { ...state, students: action.search.result, searchinAllTable: action.search.searchinAllTable };
		case (Actions.TABLE_DELET_STUDENT):
			return { ...state, students: action.payLoad.students, deletedStudent: action.payLoad.deletedStudent };
		case (Actions.TABLE_DELET_SELECTED_STUDENT):
			return { ...state, students: action.payLoad.students, deletedStudent: action.payLoad.deletedStudent };
		default:
			return state;
	}
}

const rootReducer = combineReducers({ dataTable });

export default rootReducer;
