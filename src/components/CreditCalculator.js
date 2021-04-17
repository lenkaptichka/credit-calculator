import React from 'react';
import CreditInfo from './CreditInfo';
import ResultsTable from './ResultsTable';

class CreditCalculator extends React.Component {
	calculate = () => (
		this.props.formData.paymentType === 'annuity'
			? this.calculateAnnuityPayment()
			: this.calculateDifferentiatedPayment()
	)

	calculateAnnuityPayment() {
		const { totalAmount, period, periodType, percentPerYear } = this.props.formData;

		let monthRate = percentPerYear * 0.01 / 12; // Ежемесячная ставка
		let periodOfMonth = periodType === 'year' ? period * 12 : period;

		const ann = Number((totalAmount * ((monthRate * Math.pow(monthRate + 1, periodOfMonth)) / (Math.pow(monthRate + 1, periodOfMonth) - 1))).toFixed(2)); // Ежемесячный платёж
		const totalPayout = Number((ann * periodOfMonth).toFixed(2)); // Общая выплата
		const overpayment = Number((totalPayout - totalAmount).toFixed(2)); // Переплата	
		const monthlyPayments = [];
		let loanBalance = Number(totalAmount); // Остаток по счёту

		for (let i = 1; i <= periodOfMonth; i++) {
			const monthNumber = i;
			const percents = Number((loanBalance * monthRate).toFixed(2)); // Проценты
			const loanBody = Number((ann - percents).toFixed(2)); // Долговая часть
			loanBalance = Number((loanBalance - loanBody).toFixed(2));

			monthlyPayments.push({
				monthNumber,
				payment: ann.toLocaleString(),
				percents: percents.toLocaleString(),
				loanBody: loanBody.toLocaleString(),
				loanBalance: loanBalance.toLocaleString()
			});
		}

		return {
			amountPerMonth: ann.toLocaleString(),
			overpayment: overpayment.toLocaleString(),
			totalPayout: totalPayout.toLocaleString(),
			monthlyPayments
		}
	}

	calculateDifferentiatedPayment() {
		const { totalAmount, period, periodType, percentPerYear } = this.props.formData;

		let periodOfMonth = periodType === 'year' ? period * 12 : period;
		let monthRate = percentPerYear * 0.01 / 12; // Ежемесячная ставка
		let loanBalance = Number(totalAmount); // Оставшаяся сумма платежа
		let mainDebt = Number((totalAmount / periodOfMonth).toFixed(2)); // Основной долг

		const monthlyPayments = [];
		let totalPayout = 0; // Общая выплата

		for (let i = 1; i <= periodOfMonth; i++) {
			const monthNumber = i;
			const percents = Number((loanBalance * monthRate).toFixed(2)); // Проценты
			loanBalance = Number((loanBalance - mainDebt).toFixed(2));
			const payment = Number((percents + mainDebt).toFixed(2)); // Ежемесячный платёж
			totalPayout = Number((totalPayout + payment).toFixed(2));

			monthlyPayments.push({
				monthNumber,
				payment: payment.toLocaleString(),
				percents: percents.toLocaleString(),
				loanBody: mainDebt.toLocaleString(),
				loanBalance: loanBalance.toLocaleString()
			});
		}

		const overpayment = Number((totalPayout - totalAmount).toFixed(2)); // Сумма переплат

		return {
			amountPerMonth: 'Не фиксированная',
			overpayment: overpayment.toLocaleString(),
			totalPayout: totalPayout.toLocaleString(),
			monthlyPayments
		}
	}

	render() {
		const { amountPerMonth, overpayment, totalPayout, monthlyPayments } = this.calculate();

		return (
			<>
				<CreditInfo
					amountPerMonth={amountPerMonth}
					overpayment={overpayment}
					totalPayout={totalPayout}
				/>
				<ResultsTable monthlyPayments={monthlyPayments} />
			</>
		)
	}
}

export default CreditCalculator;