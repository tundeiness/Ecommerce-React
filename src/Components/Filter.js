/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';


const Filter = ({ count, sort, changeSize }) => {
//   const [bags, setBags] = useState([]);
//   const [filteredBags, setFilteredBags] = useState([]);


  const fetchBags = () => fetch('http://localhost:8000/items')
    .then(res => res.json());

  // const fetchFiltered =()=> fetch

  useEffect(() => {
    // fetchBags().then(data => setBags(data));
    // fetchSubscription().then(data => setFilteredBags(data));
  }, []);

  const pluralize = val => {
    if (val <= 1) {
      return 'bag';
    }

    return 'bags';
  };

  return (

    <div className="row">
      <div className="col-md-4">
        {count}
        {' '}
        {pluralize(count)}
        {' '}
        found
      </div>

      <div className="col-md-4">
        <label>
          Order by
          <select className="form-control" value={sort} onChange={changeSize}>
            <option value="">Select</option>
            <option value="lowest">Lowest to Highest</option>
            <option value="highest">Highest to Lowest</option>
          </select>
        </label>
      </div>

      <div className="col-md-4">
        <p>Cart component</p>
      </div>
    </div>

  );
};

export default Filter;
