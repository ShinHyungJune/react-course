const initialState = { // 초기값
	flash: null,
	loading: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;

		case "SET_FLASH":
			return {
				...state,
				flash: action.payload
			};

		case "SET_LOADING":
			return {
				...state,
				loading: action.loading
			}
	}
}