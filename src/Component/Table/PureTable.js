import React from "react";
import { FixedSizeList as List } from 'react-window';
import './styles.css';
import ConnectedFullRowList from '../../Container/ConnectedFullRowList'


const PureTable = () => (
	<List
		className="List"
		height={600}
		width={1450}
		itemCount={1}
		itemSize={80}
	>
		{ConnectedFullRowList}
	</List>
)


export default PureTable;

