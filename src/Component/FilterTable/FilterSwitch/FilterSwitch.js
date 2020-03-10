import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

export default function Switches(props) {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true
  });

  const handleChange = name => event => {
		setState({ ...state, [name]: event.target.checked });
		if(event.target.checked) {
			props.onTrue();
		} else {
			props.onFalse();
		}
	
  };

  return (
    <FormControlLabel
      control={
        <Switch
          checked={state.checkedB}
          onChange={handleChange("checkedB")}
          value="checkedB"
          color="primary"
        />
      }
      label="Only active students"
    />
  );
}


