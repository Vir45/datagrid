import React, {useEffect} from "react";
import './Row.css';
import CheckTwoToneIcon from '@material-ui/icons/CheckTwoTone';
import ClearTwoToneIcon from '@material-ui/icons/ClearTwoTone';

const Row = ({ style, data, onDeletStudent, activeColumn }) => {
	const formatter = new Intl.DateTimeFormat("ru");
	const adress = `mailto:${data.githubId}`;
	const isActive = data.isActive ? 'student' : 'student disactive';
	const url = data.avatar;

	useEffect(() => {
		console.log(document.body.querySelector('.student'))
	})

	const getActive = (event) => {
		if (event.target.closest('a')) {
			return
		}

		if (event.ctrlKey) {
			event.target.closest('.student').classList.add('arr-for-delete');
			const target = event.target.closest('.student');
			target.style.backgroundColor = '#ADD8E6';
			return
		}

		const target = event.target.closest('.student');
		target.style.backgroundColor = '#ADD8E6';

		const deletedStudent = target.querySelector('.student-deleted');
		const coordinat = {
			x: event.pageX - 90 + 'px',
			y: event.pageY + 'px',
		}
		deletedStudent.style.display = 'block';
		deletedStudent.style.button = coordinat.y;
		deletedStudent.style.left = coordinat.x;
	}

	const deletRow = (event) => {
		event.stopPropagation();
		const target = event.target.closest('button');
		const elemForDeleted = target.closest('.student');
		onDeletStudent(Number(elemForDeleted.id))
		target.closest('.student-deleted').style.display = 'none';
		elemForDeleted.style.backgroundColor = 'white';
	}

	const getDisActive = (event) => {
		event.stopPropagation();
		const target = event.target.closest('.student-deleted');
		const parentElement = target.closest('.student');
		parentElement.style.backgroundColor = 'white';

		target.style.display = 'none'
	}

	return (
		<div className={isActive} style={style} onClick={getActive} id={data.id}>
			<div className="student-position">{data.position}</div>
			<div className="student-name"><img src={url} alt='avatar'></img>{data.name}</div>
			<div className="student-githubId"><a href={adress}>{data.githubId}</a></div>
			<div className="student-score">{data.score}</div>
			<div className="student-locationName">{data.locationName}</div>
			<div className="student-role">{data.role}</div>
			<div className="student-date">{formatter.format(data.date)}</div>
			<div className="student-companyName">{data.companyName}</div>
			<div className='student-deleted'>
				<p>Deleted student?</p>
				<div className="button-deleted-block">
					<button onClick={deletRow} className="delet"><CheckTwoToneIcon color='primary' /></button>
					<button onClick={getDisActive} className="not-delet"><ClearTwoToneIcon color='secondary' /></button>
				</div>
			</div>
		</div>
	)
}

export default Row;
