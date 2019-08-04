import React from 'react';
import { connect } from 'react-redux';

import Counter from './components/Counter';
import './App.css';

const App = ({ count, dispatch }) => {
	return (
		<div className="App">
			<Counter
				count={count}
				onIncrement={() => dispatch({ type: 'INCREMENT' })}
				onDecrement={() => dispatch({ type: 'DECREMENT' })}
			/>
		</div>
	);
};

function mapStateToProps(state) {
	return {
		count: state
	};
}

export default connect(mapStateToProps)(App);
