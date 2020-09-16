import React from 'react';

class Translator extends React.Component {
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

	getTranslation = () => {
		const { translations } = this.props;
		const { inputValue } = this.state;
		if (translations.has(inputValue)) {
			return translations.get(inputValue);
		} else {
			return '';
		}
	};

	render() {
		const { inputValue } = this.state;
		return (
			<React.Fragment>
				<div className='controls'>
					<div className='input-container'>
						<span>input:</span>
						<input
							type='text'
							className='text-input'
							data-testid='text-input'
							value={inputValue}
							onChange={this.onChangeTextFieldValue}
						/>
					</div>
					<div className='input-container'>
						<span>output:</span>
						<input
							type='text'
							className='text-output'
							data-testid='text-output'
							value={this.getTranslation()}
							readOnly
						/>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Translator;
