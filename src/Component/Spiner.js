import React from "react";
import { css } from "@emotion/core";
import GridLoader from "react-spinners/GridLoader";


const override = css`
  display: block;
  margin: 0 auto;
	border-color: #1890ff;
	size: 3;
	width: 20px;
	height: 20px;
	radius: 10px;
`;

class Spiner extends React.Component {
	render() {
		return (
			<div className="sweet-loading">
        <GridLoader
          css={override}
          size={150}
          color={"#123abc"}
          loading={this.props.loading}
        />
      </div>
		)
	}
}


export default Spiner;
