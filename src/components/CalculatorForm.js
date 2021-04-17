import React from 'react';
import '../styles/CalculatorForm.css'

class CalculatorForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			totalAmount: 1000,
			period: 1,
			periodType: 'month',
			percentPerYear: 10,
			paymentType: 'annuity'
		}
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.setFormData(this.state);
	}

	render() {
		const { totalAmount, period, periodType, percentPerYear, paymentType } = this.state;
		return (
			<>
				<form className="form" onSubmit={(event) => this.handleSubmit(event)}>
					<div className="form__field">
						<p className="form__label">Сумма:</p>
						<input
							className="form__input"
							type="number"
							name="totalAmount"
							min="1000"
							step="1000"
							max="1000000000"
							required
							value={totalAmount}
							onChange={this.handleChange}
						/>
					</div>

					<div className="form__field">
						<p className="form__label">Срок:</p>
						<div className="form__group">
							<input
								className="form__input form__input_in-group"
								type="number"
								name="period"
								min="1"
								max="30"
								step="1"
								required
								value={period}
								onChange={this.handleChange}
							/>
							<select className="form__select form__select_in-group" name="periodType" value={periodType} onChange={this.handleChange}>
								<option value="month">Месяц</option>
								<option value="year">Год</option>
							</select>
						</div>
					</div>

					<div className="form__field">
						<p className="form__label">Процентная ставка в год:</p>
						<input
							className="form__input"
							type="number"
							name="percentPerYear"
							min="1"
							max="99"
							step="0.1"
							required
							value={percentPerYear}
							onChange={this.handleChange}
						/>
					</div>
					<div className="form__field">
						<p className="form__label">Тип платежа:</p>
						<select className="form__select" name="paymentType" value={paymentType} onChange={this.handleChange}>
							<option value="annuity">Аннуитетный</option>
							<option value="differentiated">Дифференцированный</option>
						</select>
					</div>

					<button className="form__button">Рассчитать</button>
				</form>
			</>
		)
	}
}

export default CalculatorForm;