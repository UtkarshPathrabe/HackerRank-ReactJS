import React from 'react';

class Articles extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			totalPages: 0,
			page: '',
		};
		this.URL = 'https://jsonmock.hackerrank.com/api/articles?page=';
	}

	componentDidMount() {
		this.fetchDataFromURL('1').then((responseJSON) => {
			this.setState((prevState) => ({
				...prevState,
				data: responseJSON.data,
				totalPages: responseJSON.total_pages,
				page: responseJSON.page,
			}));
		});
	}

	async fetchDataFromURL(pageNumber) {
		return await fetch(this.URL + pageNumber, {
			method: 'GET',
		})
			.then((response) => {
				return response.json();
			})
			.catch((error) => {
				console.error(error);
				return {
					data: [],
					totalPages: 0,
					page: '',
				};
			});
	}

	onButtonClick = (i) => (event) => {
		event.preventDefault();
		const { page } = this.state;
		if (page !== String(i)) {
			this.fetchDataFromURL(String(i)).then((responseJSON) => {
				this.setState((prevState) => ({
					...prevState,
					data: responseJSON.data,
					totalPages: responseJSON.total_pages,
					page: responseJSON.page,
				}));
			});
		}
	};

	renderButtons = () => {
		const buttons = [];
		const { totalPages } = this.state;
		for (let i = 1; i <= totalPages; i++) {
			buttons.push(
				<button
					data-testid='page-button'
					key={`page-button-${i}`}
					onClick={this.onButtonClick(i)}
				>
					{i}
				</button>,
			);
		}
		return buttons;
	};

	renderResults = () => {
		const results = [];
		const { data } = this.state;
		for (let i = 0; data && i < data.length; i++) {
			if (
				data[i].hasOwnProperty('title') &&
				data[i].title &&
				typeof data[i].title === 'string' &&
				data[i].title.length > 0
			) {
				results.push(
					<li key={`title-${i + 1}`} data-testid='result-row'>
						{data[i].title}
					</li>,
				);
			}
		}
		return results;
	};

	render() {
		return (
			<React.Fragment>
				<div className='pagination'>{this.renderButtons()}</div>
				<ul className='results'>{this.renderResults()}</ul>
			</React.Fragment>
		);
	}
}

export default Articles;
