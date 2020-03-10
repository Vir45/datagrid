import React, { Component } from "react";
import Row from './Row/Row';
import './FullList.css';
import CheckTwoToneIcon from '@material-ui/icons/CheckTwoTone';
import ClearTwoToneIcon from '@material-ui/icons/ClearTwoTone';

export default class FullList extends Component {

	componentDidMount() {
		this.props.onAllMount();
		this.props.onMount();
	}

	getSomeStudents = (event) => {
		const arrOdStudents = document.body.querySelectorAll('.arr-for-delete');
		const notification = document.body.querySelector('.arr-student-deleted');
		const coordinat = {
			x: event.pageX - 90 + 'px',
			y: event.pageY - 180 + 'px',
		}
	
		document.addEventListener('keyup', function(event) {
	
			if(event.key !== 'Control') {
				return
			}

			if(arrOdStudents.length === 0) {
				return
			}
	
			notification.style.display = 'block';
			notification.style.top = coordinat.y;
			notification.style.left = coordinat.x;
		})
	}

	deletRow = () => {
		const arrOdStudents = Array.from(document.body.querySelectorAll('.arr-for-delete'));
		const notification = document.body.querySelector('.arr-student-deleted');

		const item = arrOdStudents.map(item => Number(item.id));
		arrOdStudents.forEach(item => item.style.backgroundColor = 'white');
		notification.style.display = 'none';
		this.props.onDeletSelectedStudent(item)
	}

	getDisActive = () => {
		const arrOdStudents = document.body.querySelectorAll('.arr-for-delete');
		const notification = document.body.querySelector('.arr-student-deleted');
		arrOdStudents.forEach(item => item.style.backgroundColor = 'white');
		notification.style.display = 'none';
	}

	deletStudent = (item) => {
		this.props.onDeletStudent(item);
	}

	
	render() {
		return (
			<div onClick={this.getSomeStudents} className='full-list-of-students'>
				{this.props.data.students.map((item, index) => (<Row data={item} key={index} onDeletStudent={this.deletStudent} activeColumn={this.props.active} />))}
				<div className='arr-student-deleted'>
				<p>Deleted selected students?</p>
				<div className="button-deleted-block">
				<button onClick={this.deletRow} className="delet"><CheckTwoToneIcon color='primary' /></button>
					<button onClick={this.getDisActive} className="not-delet"><ClearTwoToneIcon color='secondary' /></button>
				</div>
			</div>
			</div>
		)
	}
}

