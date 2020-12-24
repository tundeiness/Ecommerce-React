import { FETCH_BAGS } from '../actions/ActionTypes';


const { useReducer } = React;

const initialState = { items: [] };

const reducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case FETCH_BAGS:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};
