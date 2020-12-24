import { FETCH_BAGS } from './ActionTypes';

const fetchBags = () => dispatch => {
  fetch('http://localhost:8000/items').then(res => res.json())
    .then(data => dispatch({ type: FETCH_BAGS, payload: data }));
};


export default fetchBags;
