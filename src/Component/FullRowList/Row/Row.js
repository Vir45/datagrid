import React from "react";
import './Row.css';
import CheckTwoToneIcon from '@material-ui/icons/CheckTwoTone';
import ClearTwoToneIcon from '@material-ui/icons/ClearTwoTone';


const Row = ({ style, data, onDeletStudent, activeColumn }) => {
	const adress = `mailto:${data.githubId}`;
	const isActive = data.isActive ? 'student' : 'student disactive';
	const url = data.avatar;
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
			<Position data={data.position} active={activeColumn} name='position'/>
			<Name data={data.name} active={activeColumn} name='name' url={url}/>
			<GithubId data={data.githubId} active={activeColumn} name='githubId' href={adress}/>
			<Score data={data.score} active={activeColumn} name='score'/>
			<LocationName data={data.locationName} active={activeColumn} name='locationName'/>
			<div className="student-role">{data.role}</div>
			<Date data={data.date} active={activeColumn} name='date'/>
			<CompanyName data={data.companyName} active={activeColumn} name='companyName'/>
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


class Position extends React.Component {
	render() {
		let active;
		if(this.props.name === this.props.active) {
       active = 'active-column';
		} else {
			active = '';
		}

		return (
			<div className="student-position" data-active={active}>{this.props.data}</div>
		)
	}
}

class Name extends React.Component {
	render() {
		let active;
		if(this.props.name === this.props.active) {
       active = 'active-column';
		} else {
			active = '';
		}

		return (
			<div className="student-name" data-active={active}><img src={this.props.url} alt='avatar'></img>{this.props.data}</div>
		)
	}
}

class GithubId extends React.Component {
	render() {
		let active;
		if(this.props.name === this.props.active) {
       active = 'active-column';
		} else {
			active = '';
		}

		return (
			<div className="student-githubId" data-active={active}><a href={this.props.href}>{this.props.data}</a></div>
		)
	}
}


class Score extends React.Component {
	render() {
		let active;
		if(this.props.name === this.props.active) {
       active = 'active-column';
		} else {
			active = '';
		}

		return (
			<div className="student-score" data-active={active}>{this.props.data}</div>
		)
	}
}

class LocationName extends React.Component {
	render() {
		let active;
		if(this.props.name === this.props.active) {
       active = 'active-column';
		} else {
			active = '';
		}

		return (
			<div className="student-locationName" data-active={active}>{this.props.data}</div>
		)
	}
}


class Date extends React.Component {
	render() {
		const formatter = new Intl.DateTimeFormat("ru");
		let active;
		if(this.props.name === this.props.active) {
       active = 'active-column';
		} else {
			active = '';
		}

		return (
			<div className="student-date" data-active={active}>{String(formatter.format(this.props.data))}</div>
		)
	}
}

class CompanyName extends React.Component {
	render() {
		let active;
		if(this.props.name === this.props.active) {
       active = 'active-column';
		} else {
			active = '';
		}

		return (
			<div className="student-companyName" data-active={active}>{this.props.data}</div>
		)
	}
}


export default Row;
