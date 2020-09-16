import React from 'react';

class EmployeesList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
		};
	}

	onChangeTextFieldValue = (event) => {
		event.preventDefault();
		const value = event.target.value;
		this.setState((prevState) => ({
			...prevState,
			inputValue: value,
		}));
	};

	render() {
		const { employees } = this.props;
		const { inputValue } = this.state;
		return (
			<React.Fragment>
				<div className='controls'>
					<input
						type='text'
						className='filter-input'
						data-testid='filter-input'
						value={inputValue}
						onChange={this.onChangeTextFieldValue}
					/>
				</div>
				<ul className='employees-list'>
					{employees
						.filter((employee) =>
							String(employee.name)
								.toLowerCase()
								.includes(inputValue.toLowerCase()),
						)
						.map((employee) => (
							<li key={employee.name} data-testid='employee'>
								{employee.name}
							</li>
						))}
				</ul>
			</React.Fragment>
		);
	}
}

export default EmployeesList;
