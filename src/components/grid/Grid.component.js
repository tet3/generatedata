import React, { useState } from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import styles from './Grid.scss';
import Dropdown from '../dropdown/Dropdown';
import { getSortedGroupedDataTypes } from '../../utils/dataTypes';

const getComponentsWithFallback = (hasDataType, component) => ({
	Example: hasDataType && component.Example ? component.Example : () => null,
	Options: hasDataType && component.Options ? component.Options : () => null,
	Help: hasDataType && component.Help ? component.Help : () => null
});

const Grid = ({ rows, onRemove, onAddRows, onChangeDataType, i18n }) => {
	const [numRows, setNumRows] = useState(1);
	const [visible, showHelpDialog] = useState(false);

	// TODO memoize
	const dataTypes = getSortedGroupedDataTypes();

	const getRows = (rows) => {
		return rows.map((row, index) => {
			const { Example, Options, Help } = getComponentsWithFallback(row.dataType !== null, row);

			// getReactSelectValue(i.value, dataTypes)
			
			return (
				<div className={styles.gridRow} key={row.id}>
					<div className={styles.orderCol}>{index + 1}</div>
					<div className={styles.titleCol}>
						<input type="text" />
					</div>
					<div className={styles.dataTypeCol}>
						<Dropdown
							value={}
							onChange={(i) => onChangeDataType(i.id, i.value)}
							options={dataTypes}
						/>
					</div>
					<div className={styles.examplesCol}>
						<Example
							id={row.id}
							options={row.options}
							example={row.example}
						/>
					</div>
					<div className={styles.optionsCol}>
						<Options
							id={row.id}
							options={row.options}
							example={row.example}
						/>
					</div>
					<div className={styles.helpCol}>

					</div>
					<div className={styles.deleteCol} onClick={() => onRemove(row.id)}>
						<HighlightOffIcon />
					</div>
				</div>
			);
		});
	};

	return (
		<div>
			<div className={styles.grid}>
				{getRows(rows)}
			</div>
			<div className={styles.addRows}>
				<form onSubmit={(e) => e.preventDefault()}>
					<span>{i18n.add}</span>
					<input type="number" value={numRows} onChange={(e) => setNumRows(parseInt(e.target.value, 10))}
						min={1} max={1000} step={1} />
					<button onClick={() => onAddRows(numRows)}>{i18n.row_sp}</button>
				</form>
			</div>
		</div>
	)
};

export default Grid;
