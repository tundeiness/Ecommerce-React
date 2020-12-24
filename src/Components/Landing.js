/* eslint-disable no-lone-blocks */
/* eslint-disable no-param-reassign */
/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Bags from './Bags';
import Filter from './Filter';
import Cart from './Cart';

const Landing = () => {
  const [bags, setBags] = useState([]);
  const [filteredBags, setFilteredBags] = useState([]);
  const [sort, setSort] = useState('');
  const [state, setState] = useState('');
  const [bagType, setBagType] = useState('');
  const [size, setSize] = useState('');
  const [cartItem, setCartItem] = useState([]);


  const fetchBags = () => fetch('http://localhost:8000/items')
    .then(res => res.json());

  const fetchFiltered = () => fetch('http://localhost:8000/items')
    .then(res => res.json());

  const handleAddToCart = (e, bag) => {
    const count = 0;
    const cartCopy = cartItem;
    const bagInCart = false;


    if (!bagInCart) {
      cartItem.push({ ...bag, count: 1 });
    }
    localStorage.setItem('cartItem', JSON.stringify(cartItem));
    setState(bag);
    return cartItem;
  };

  const handleItemRemoval = (e, itm) => {
    const anFilt = cartItem.filter(f => f.id !== itm.id);
    setCartItem(anFilt);
    localStorage.setItem('cartItem', anFilt);
  };


  const sortLogic = () => {
    if (sort !== '') {
      bags.sort((a, b) => ((sort === 'lowest') ? (a.price < b.price ? 1 : -1) : (a.price > b.price ? 1 : -1)));
    } else {
      bags.sort((a, b) => (a.id < b.id ? 1 : -1));
    }

    const filtType = bags.filter(a => a.type.indexOf(bagType) >= 0);

    if (bagType !== '') {
      return setFilteredBags(filtType);
    }
    return setFilteredBags(bags);
  };

  const listBags = () => {
    setState(sortLogic);
  };

  const changeSize = e => {
    setSort(e.target.value);
    listBags();
  };


  const handleChangeType = e => {
    setBagType(e.target.value);
    listBags();
  };

  useEffect(() => {
    fetchBags().then(data => setBags(data));
    fetchFiltered().then(data => setFilteredBags(data));
  }, []);


  return (
    <div className="container">

      <h4 className="text-center">Basic eCommerce page</h4>

      <hr />
      <div className="row justify-content-center">
        <div className="col-md-8">
          <Filter size={size} sort={sort} changeSize={changeSize} handleChangeType={handleChangeType} count={filteredBags.length} />
          <hr />
          <Bags bags={filteredBags} handleAddToCart={handleAddToCart} />
        </div>
        <div className="col-md-4">
          <Cart cartItem={cartItem} handleItemRemoval={handleItemRemoval} />
        </div>
      </div>
    </div>
  );
};


export default Landing;
