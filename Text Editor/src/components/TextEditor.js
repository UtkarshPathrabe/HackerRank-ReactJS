import React from 'react';

class TextEditor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			textAreaValue: [],
		};
	}

	handleTextFieldChange = (event) => {
		event.preventDefault();
		const value = event.target.value;
		this.setState((prevState) => ({
			...prevState,
			inputValue: value,
		}));
	};

	onAppendButtonClick = (event) => {
		event.preventDefault();
		this.setState((prevState) => ({
			...prevState,
			textAreaValue: [...prevState.textAreaValue, prevState.inputValue],
			inputValue: '',
		}));
	};

	onUndoButtonClick = (event) => {
		event.preventDefault();
		this.setState((prevState) => {
			const values = [...prevState.textAreaValue];
			values.pop();
			return {
				...prevState,
				textAreaValue: values,
			};
		});
	};

	render() {
		const { inputValue, textAreaValue } = this.state;
		return (
			<React.Fragment>
				<div className='controls'>
					<input
						className='word-input'
						type='text'
						data-testid='word-input'
						onChange={this.handleTextFieldChange}
						value={inputValue}
					/>
					<button
						data-testid='append-button'
						disabled={inputValue.length === 0}
						onClick={this.onAppendButtonClick}
					>
						Append
					</button>
					<button
						data-testid='undo-button'
						disabled={textAreaValue.length === 0}
						onClick={this.onUndoButtonClick}
					>
						Undo
					</button>
				</div>
				<div className='text-field' data-testid='text-field'>
					{textAreaValue.join(' ')}
				</div>
			</React.Fragment>
		);
	}
}

export default TextEditor;
