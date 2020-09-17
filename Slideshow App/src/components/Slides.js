import React from 'react';

class Slides extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentSlide: 0,
		};
	}

	onRestartButtonClick = (event) => {
		event.preventDefault();
		this.setState((prevState) => ({
			...prevState,
			currentSlide: 0,
		}));
	};

	onPreviousButtonClick = (event) => {
		event.preventDefault();
		this.setState((prevState) => ({
			...prevState,
			currentSlide: prevState.currentSlide - 1,
		}));
	};

	onNextButtonClick = (event) => {
		event.preventDefault();
		this.setState((prevState) => ({
			...prevState,
			currentSlide: prevState.currentSlide + 1,
		}));
	};

	render() {
		const { slides } = this.props;
		const { currentSlide } = this.state;
		return (
			<div>
				<div id='navigation' className='text-center'>
					<button
						data-testid='button-restart'
						className='small outlined'
						disabled={currentSlide === 0}
						onClick={this.onRestartButtonClick}
					>
						Restart
					</button>
					<button
						data-testid='button-prev'
						className='small'
						disabled={currentSlide === 0}
						onClick={this.onPreviousButtonClick}
					>
						Prev
					</button>
					<button
						data-testid='button-next'
						className='small'
						disabled={currentSlide === slides.length - 1}
						onClick={this.onNextButtonClick}
					>
						Next
					</button>
				</div>
				<div id='slide' className='card text-center'>
					<h1 data-testid='title'>{slides[currentSlide].title}</h1>
					<p data-testid='text'>{slides[currentSlide].text}</p>
				</div>
			</div>
		);
	}
}

export default Slides;
