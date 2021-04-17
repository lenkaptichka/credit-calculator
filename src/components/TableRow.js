import React from 'react';

class TableRow extends React.Component {
	render() {
		const { row } = this.props;
		return (
			<div className="table__row">
				<p className="table__column-item table__column-item_number">{row.monthNumber}</p>
				<p className="table__column-item table__column-item_value">{row.payment}</p>
				<p className="table__column-item table__column-item_value">{row.percents}</p>
				<p className="table__column-item table__column-item_value">{row.loanBody}</p>
				<p className="table__column-item table__column-item_value">{row.loanBalance}</p>
			</div>
		)
	}
}

export default TableRow;