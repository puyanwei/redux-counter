import React from 'react';

const Counter = ({ count, onIncrement, onDecrement }) => {
	return (
		<div>
			<p>This counter is clicked {count} times!</p>
			<button onClick={onIncrement}>+</button>
			<button onClick={onDecrement}>-</button>
		</div>
	);
};

export default Counter;
