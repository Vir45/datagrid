
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
	searchTerm: '',
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
		// case (Actions.TABLE_SORT):
		// 	return { ...state, sort: action.payLoad };
		case (Actions.TABLE_SORT_SUCCESS):
			return { ...state, students: action.payLoad.students, sort: action.payLoad.sort };
		// case (Actions.TABLE_SORT_FAILURE):
		// 	return { ...state, errors: action.payLoad };
		case (Actions.TABLE_SHIFT_SORT_SUCCESS):
			return { ...state, students: action.payLoad};
		case (Actions.START_TABLE_SELECT_ROLE):
			return { ...state, selectTypes: action.payLoad};
		case (Actions.TABLE_SELECT_ROLE):
			return { ...state, students: action.payLoad.newStudents, selectTypes: action.payLoad.selectTypes  };
		case (Actions.FETCH_ALL_DATA_SUCCESS):
			return { ...state, students: action.payLoad };
		case (Actions.TABLE_SEARCH):
			return { ...state, students: action.search };
		case (Actions.TABLE_ALL_SEARCH):
			return { ...state, students: action.search };
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
