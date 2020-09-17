import React from 'react';

class CycleCounter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
	}

	onButtonClick = (event) => {
		event.preventDefault();
		const { cycle } = this.props;
		this.setState((prevState) => ({
			...prevState,
			count: (prevState.count + 1) % cycle,
		}));
	};

	render() {
		const { count } = this.state;
		return (
			<div className='layout-column align-items-center mt-50'>
				<section className='pt-20 layout-row align-items-center justify-content-center'>
					<button
						data-testid='cycle-counter'
						style={{ fontSize: '1rem', width: 120, height: 30 }}
						onClick={this.onButtonClick}
					>
						{count}
					</button>
				</section>
			</div>
		);
	}
}

export default CycleCounter;
