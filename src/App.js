import './App.css';
import React from 'react';
import CalculatorForm from './components/CalculatorForm';
import CreditCalculator from './components/CreditCalculator';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      formData: {},
      showResults: false
    }
  }

  setFormData = (formData) => {
    this.setState({ formData, showResults: true });
  }

  render() {
    return (
      <>
        <h1 className="title">Кредитный калькулятор</h1>
        <CalculatorForm setFormData={this.setFormData} />

        {this.state.showResults &&
          <CreditCalculator
            formData={this.state.formData}
          />
        }
      </>
    )
  }
}

export default App;