/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';


const Cart = () => {
  const [bags, setBags] = useState([]);
  const [filteredBags, setFilteredBags] = useState([]);


  const fetchBags = () => fetch('http://localhost:8000/items')
    .then(res => res.json());

  // const fetchFiltered =()=> fetch

  useEffect(() => {
    fetchBags().then(data => setBags(data));
    // fetchSubscription().then(data => setFilteredBags(data));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <p>Cart component</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
