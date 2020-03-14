import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import {
  deepOrange,
  deepPurple,
  indigo,
  cyan,
  teal,
  green,
  grey,
  brown
} from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  orange: {
		marginRight: '5px',
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    width: theme.spacing(3),
		height: theme.spacing(3),
		fontSize: '10px',
  },
  purple: {
		marginRight: '5px',
    color: theme.palette.getContrastText(deepPurple[600]),
    backgroundColor: deepPurple[600],
    width: theme.spacing(3),
		height: theme.spacing(3),
		fontSize: '10px',
  },
  indigo: {
		marginRight: '5px',
    color: theme.palette.getContrastText(indigo[200]),
    backgroundColor: indigo[200],
    width: theme.spacing(3),
		height: theme.spacing(3),
		fontSize: '10px',
  },
  deepIndigo: {
		marginRight: '5px',
    color: theme.palette.getContrastText(indigo[800]),
    backgroundColor: indigo[800],
    width: theme.spacing(3),
		height: theme.spacing(3),
		fontSize: '10px',
  },
  cyan: {
		marginRight: '5px',
    color: theme.palette.getContrastText(cyan[200]),
    backgroundColor: cyan[200],
    width: theme.spacing(3),
		height: theme.spacing(3),
		fontSize: '10px',
  },
  deepCyan: {
		marginRight: '5px',
    color: theme.palette.getContrastText(cyan[800]),
    backgroundColor: cyan[800],
    width: theme.spacing(3),
		height: theme.spacing(3),
		fontSize: '10px',
  },
  teal: {
		marginRight: '5px',
    color: theme.palette.getContrastText(teal[200]),
    backgroundColor: teal[200],
    width: theme.spacing(3),
		height: theme.spacing(3),
		fontSize: '10px',
  },
  deepTeal: {
		marginRight: '5px',
    color: theme.palette.getContrastText(teal[800]),
    backgroundColor: teal[800],
    width: theme.spacing(3),
		height: theme.spacing(3),
		fontSize: '10px',
  },
  green: {
		marginRight: '5px',
    color: theme.palette.getContrastText(green[200]),
    backgroundColor: green[200],
    width: theme.spacing(3),
		height: theme.spacing(3),
		fontSize: '10px',
  },
  deepGreen: {
		marginRight: '5px',
    color: theme.palette.getContrastText(green[800]),
    backgroundColor: green[800],
    width: theme.spacing(3),
		height: theme.spacing(3),
		fontSize: '10px',
  },
  grey: {
		marginRight: '5px',
    color: theme.palette.getContrastText(grey[200]),
    backgroundColor: grey[200],
    width: theme.spacing(3),
		height: theme.spacing(3),
		fontSize: '10px',
  },
  deepGrey: {
		marginRight: '5px',
    color: theme.palette.getContrastText(grey[800]),
    backgroundColor: grey[800],
    width: theme.spacing(3),
		height: theme.spacing(3),
		fontSize: '10px',
  },
  brown: {
		marginRight: '5px',
    color: theme.palette.getContrastText(brown[200]),
    backgroundColor: brown[200],
    width: theme.spacing(3),
		height: theme.spacing(3),
		fontSize: '10px',
  },
  deepBrown: {
		marginRight: '5px',
    color: theme.palette.getContrastText(brown[800]),
    backgroundColor: brown[800],
    width: theme.spacing(3),
		height: theme.spacing(3),
		fontSize: '10px',
  }
}));

export default function LetterAvatars(props) {
	const classes = useStyles();
	const random = (arr) => {
    let rand = Math.random() * (arr.length);
    return (arr[Math.floor(rand)])
	};
	
	const randomClass = random(Object.values(classes));
	console.log(randomClass)

  return ( 
	<Avatar className={randomClass}>{props.letter}</Avatar>
  );
}
