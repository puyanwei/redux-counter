const initialState = { count: 0 };
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export default (state = initialState, action) => {
	let newState = { ...state };
	switch (action.type) {
		case INCREMENT:
			return { count: newState.count + 1 };
		case DECREMENT:
			return { count: newState.count - 1 };
		default:
			return newState;
	}
};
