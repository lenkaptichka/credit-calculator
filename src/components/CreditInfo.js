import React from 'react';
import '../styles/CreditInfo.css';

class CreditInfo extends React.Component {
	render() {
		return (
			<div className="results">
				<h3 className="results__title">Результаты расчёта:</h3>
				<ul className="results__list">
					<li className="results__list-item">
						<h4 className="results__name">Сумма ежемесячного платежа:</h4>
						<p className="results__value">{this.props.amountPerMonth}</p>
					</li>
					<li className="results__list-item">
						<h4 className="results__name">Переплата по кредиту:</h4>
						<p className="results__value">{this.props.overpayment}</p>
					</li>
					<li className="results__list-item">
						<h4 className="results__name">Полная сумма выплат:</h4>
						<p className="results__value">{this.props.totalPayout}</p>
					</li>
				</ul>
			</div>
		)
	}
}

export default CreditInfo;