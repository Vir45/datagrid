import { Actions } from "./actionTypes";
import data from "../../Api/Data";
import store from "../store";



function getAllСonditions(data) {
	data.sort(function (a, b) {
		if (b.score > a.score) { return 1; }
		if (b.score < a.score) { return -1; }
		return 0;
	});

	const sortData = data.map((item, index) => {
		return {
			...item,
			position: index + 1
		}
	})

	const deletedStudent = store.getState().dataTable.deletedStudent;

	if(typeof deletedStudent === 'number' && deletedStudent > 0) {
		for (let i = 0; i < sortData.length; i++) {
			if (sortData[i].id === deletedStudent) {
				sortData.splice(i, 1);
				i--
			}
		}
	} else if (deletedStudent instanceof Array && deletedStudent.length > 0) {
		for (let i = 0; i < sortData.length; i++) {
			for (let j = 0; j < deletedStudent.length; j++) {
				if (sortData[i].id === deletedStudent[j]) {
					sortData.splice(i, 1);
					i--;
					continue;
				}
			}
		}
	}

	const sort = store.getState().dataTable.sort;
	let { direction, property } = sort;

	if (property.length > 0) {
		if (direction === 'UP') {
			sortData.sort(function (a, b) {
				if (a[property] > b[property]) { return 1; }
				if (a[property] < b[property]) { return -1; }
				return 0;
			})
		} else {
			sortData.sort(function (a, b) {
				if (b[property] < a[property]) { return -1; }
				if (b[property] > a[property]) { return 1; }
				return 0;
			})
		}
	} 

	return sortData;
}


export const fetchData = () => {
	
	const sortData = getAllСonditions(data);
	let newData;
	const selectTypes = store.getState().dataTable.selectTypes;

	if(selectTypes === 'student' || selectTypes === 'activist' || selectTypes === 'experienced student') {
		const selectData = sortData.filter((item) => item.role === selectTypes);
		newData = selectData.filter(item => item.isActive === true);
	} else {
		newData = sortData.filter(item => item.isActive === true)
	}
	
	return { type: Actions.FETCH_DATA_SUCCESS, payLoad: newData };
}


export const fetchAllData = () => {

	const sortData = getAllСonditions(data);
	let result = sortData;

	const selectTypes = store.getState().dataTable.selectTypes;

	if(selectTypes === 'student' || selectTypes === 'activist' || selectTypes === 'experienced student') {
		result = result.filter((item) => item.role === selectTypes);
	}

	return { type: Actions.FETCH_ALL_DATA_SUCCESS, payLoad: result };
}


export const sortTable = (property, direction) => {
	const students = store.getState().dataTable.students;
	if (direction === 'UP') {
		students.sort(function (a, b) {
			if (a[property] > b[property]) { return 1; }
			if (a[property] < b[property]) { return -1; }
			return 0;
		})
	} else {
		students.sort(function (a, b) {
			if (b[property] < a[property]) { return -1; }
			if (b[property] > a[property]) { return 1; }
			return 0;
		})
	}
	const sort = {
		property,
		direction,
	}

	return { type: Actions.TABLE_SORT_SUCCESS, payLoad: { students, sort } };
}


export const selectRoleStudent = (property) => {
	const students = store.getState().dataTable.students;
	const newStudents = students.filter((item) => item.role === property);
	const selectTypes = property;
	return { type: Actions.TABLE_SELECT_ROLE, payLoad: {newStudents, selectTypes }}
}



export const StartselectRoleStudent = (property) => {
	const selectTypes = property;
	return { type: Actions.START_TABLE_SELECT_ROLE, payLoad: selectTypes }
}


export const SearchStudent = (property, text) => {
	const students = store.getState().dataTable.students;
	const newStudents = students.filter((item) => item[property].toLowerCase().indexOf(text) >= 0);
	return { type: Actions.TABLE_SEARCH, search: newStudents }
}


export const SearchForAllStudent = (text) => {
	const students = store.getState().dataTable.students;
	const result = [];
	for (let student of students) {
		const arrOfDataStudent = Object.values(student);
		arrOfDataStudent.forEach(item => {
			if (typeof item === 'string') {
				if (item.toLowerCase().indexOf(text) >= 0) {
					if (!result.includes(student)) {
						result.push(student)
					}
				}
			}
		})
	}

	return { type: Actions.TABLE_ALL_SEARCH, search: result }
}



export const DeletStudent = (item) => {
	const students = store.getState().dataTable.students;
	for (let i = 0; i < students.length; i++) {
		if (students[i].id === item) {
			students.splice(i, 1);
			i--
		}
	}

	const deletedStudent = item;
	return { type: Actions.TABLE_DELET_STUDENT, payLoad: {students, deletedStudent }}
}

export const DeletSelectedStudent = (item) => {
	const students = store.getState().dataTable.students;
	for (let i = 0; i < students.length; i++) {
		for (let j = 0; j < item.length; j++) {
			if (students[i].id === item[j]) {
				students.splice(i, 1);
				i--;
				continue;
			}
		}
	}

	const deletedStudent = item;
	return { type: Actions.TABLE_DELET_SELECTED_STUDENT, payLoad: {students, deletedStudent } }
}

