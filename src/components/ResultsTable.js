import React from 'react';
import TableRow from './TableRow';
import '../styles/ResultsTable.css'

class ResultsTable extends React.Component {
	render() {
		const { monthlyPayments } = this.props;
		return (
			<div className="table">
				<div className="table__row table__row_header">
					<p className="table__column-item table__column-item_number">Номер выплаты</p>
					<p className="table__column-item table__column-item_value">Платёж</p>
					<p className="table__column-item table__column-item_value">Процентная часть</p>
					<p className="table__column-item table__column-item_value">Долговая часть</p>
					<p className="table__column-item table__column-item_value">Остаток долга</p>
				</div>
				{monthlyPayments.map(row => {
					return <TableRow row={row} key={row.monthNumber} />
				})}
			</div>
		)
	}
}

export default ResultsTable;