import React from 'react';
import './DownloadButton.css';
import GetAppIcon from '@material-ui/icons/GetApp';

class DownloadButton extends React.Component {

	downloadCSV = (csv, filename) => {
	
    let csvFile = new Blob([csv], {type: "text/csv"});
    let downloadLink = document.createElement("a");

    downloadLink.download = filename;

    downloadLink.href = window.URL.createObjectURL(csvFile);

    downloadLink.style.display = "none";

    document.body.appendChild(downloadLink);

    downloadLink.click();
	}

	saveTable = (event) => {
		const target = event.target.closest('button');
		const fileName = target.value;
	
		const csv = [];
    const students = document.querySelectorAll('.student');
    
    for (let i = 0; i < students.length; i++) {
				const student = [];
				const cols = students[i].children;
        
        for (let j = 0; j < cols.length - 1; j++) 
				student.push(cols[j].innerText);
        
        csv.push(student.join(","));        
    }

		this.downloadCSV(csv.join("\n"), fileName);
		target.blur();

	}

	render() {
		return (
			<div className="download-block">
				<p>Export HTML Table To CSV File</p> 
				<button onClick={this.saveTable} value='dataGrid.csv' className="download-button"><GetAppIcon color="primary" /></button>
				</div>
		)
	}
}

export default DownloadButton;
