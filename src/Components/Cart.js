/* eslint-disable react/prop-types */
import React from 'react';


const Cart = ({ cartItems, handleItemRemoval }) => {
//   const [bags, setBags] = useState([]);
//   const [filteredBags, setFilteredBags] = useState([]);


  //   const fetchBags = () => fetch('http://localhost:8000/items')
  //     .then(res => res.json());

  // const fetchFiltered =()=> fetch

  //   useEffect(() => {
  //     fetchBags().then(data => setBags(data));

  //   }, []);
  const pluralize = val => {
    if (val <= 1) {
      return 'bag';
    }

    return 'bags';
  };

  return (
    <div className="alert alert-info">
      {cartItems.length === 0 ? ' Your Cart is empty' : (
        <div>
          {' '}
          <p>
            You have
            {cartItems.length}
            {' '}
            {pluralize(cartItems.length)}
            {' '}
            in your Cart
          </p>
        </div>
      )}
      {cartItems.length > 0
        && (
        <div>
          <ul>
            {cartItems.map(data => (
              <li key={data.id}>
                <b>{data.name}</b>
                x
                {' '}
                {data.count}
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={e => handleItemRemoval(e, data)}
                >
                  X

                </button>
              </li>
            ))}
          </ul>
        </div>
        )}
    </div>
  );
};

export default Cart;
