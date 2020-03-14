import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

import './MultipleSelect.css'

import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 150
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: 0
  },
  noLabel: {
    marginTop: theme.spacing(3)
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 0;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200
    }
  }
};

const studentRoles = [
  "all students",
  "student",
  "activist",
  "experienced student"
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  };
}

export default function MultipleSelect(props) {
  const classes = useStyles();
  const theme = useTheme();
  let [studentRole, setStudentRole] = React.useState(["all students"]);

  const handleChange = event => {
		setStudentRole(event.target.value);
		props.onselect(event.target.value)
	};
	
	if(studentRole.length === 0) {
		studentRole = ["all students"];
	}

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
          multiple
          value={studentRole}
          onChange={handleChange}
          input={<Input />}
					MenuProps={MenuProps}
        >
          {studentRoles.map(role => (
            <MenuItem
              key={role}
              value={role}
              style={getStyles(role, studentRole, theme)}
            >
              {role}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
