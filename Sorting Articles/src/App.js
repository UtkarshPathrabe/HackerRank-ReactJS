import React from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = 'Sorting Articles';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			articles: [],
		};
	}

	componentDidMount() {
		this.setState(
			(prevState) => ({
				...prevState,
				articles: this.props.articles,
			}),
			() => {
				this.sortByUpvotesDescending();
			},
		);
	}

	sortByUpvotesDescending = () => {
		this.setState((prevState) => {
			const articles = [...prevState.articles];
			articles.sort((a, b) => b.upvotes - a.upvotes);
			return {
				...prevState,
				articles: articles,
			};
		});
	};

	sortByRecentDate = () => {
		this.setState((prevState) => {
			const articles = [...prevState.articles];
			articles.sort((a, b) => b.date.localeCompare(a.date));
			return {
				...prevState,
				articles: articles,
			};
		});
	};

	onUpvoteButtonClick = (event) => {
		event.preventDefault();
		this.sortByUpvotesDescending();
	};

	onRecentButtonClick = (event) => {
		event.preventDefault();
		this.sortByRecentDate();
	};

	render() {
		const { articles } = this.state;
		return (
			<div className='App'>
				<h8k-navbar header={title}></h8k-navbar>
				<div className='layout-row align-items-center justify-content-center my-20 navigation'>
					<label className='form-hint mb-0 text-uppercase font-weight-light'>
						Sort By
					</label>
					<button
						data-testid='most-upvoted-link'
						className='small'
						onClick={this.onUpvoteButtonClick}
					>
						Most Upvoted
					</button>
					<button
						data-testid='most-recent-link'
						className='small'
						onClick={this.onRecentButtonClick}
					>
						Most Recent
					</button>
				</div>
				<Articles articles={articles} />
			</div>
		);
	}
}

export default App;
