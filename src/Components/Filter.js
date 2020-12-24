/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';


const Filter = ({
  count, sort, type, changeSize, handleChangeType,
}) => {
  const fetchBags = () => fetch('http://localhost:8000/items')
    .then(res => res.json());


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
          <select className="form-control" value={type} onChange={changeSize}>
            <option value="">Select</option>
            <option value="lowest">Lowest to Highest</option>
            <option value="highest">Highest to Lowest</option>
          </select>
        </label>
      </div>

      <div className="col-md-4">
        <label>
          Filter type
          <select className="form-control" value={sort} onChange={handleChangeType}>
            <option value="">All</option>
            <option value="handbag">handbag</option>
            <option value="travel bag">travel bag</option>
            <option value="knapsack">knapsack</option>
            <option value="backpack">backpack</option>
            <option value="pouch bag">pouch bag</option>
            <option value="satchel bag">satchel bag</option>
          </select>
        </label>
      </div>
    </div>

  );
};

export default Filter;
