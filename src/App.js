/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Bags from './Components/Bags';
import Filter from './Components/Filter';
import './App.css';
import Cart from './Components/Cart';

const App = () => {
  const [bags, setBags] = useState([]);
  const [filteredBags, setFilteredBags] = useState([]);
  const [sort, setSort] = useState('');
  const [state, setState] = useState('');
  const [bagType, setBagType] = useState('');
  const [size, setSize] = useState('');
  const [genderUse, setGenderUse] = useState('');
  const [cartItems, setCartItems] = useState([]);


  const fetchBags = () => fetch('http://localhost:8000/items')
    .then(res => res.json());

  const fetchFiltered = () => fetch('http://localhost:8000/items')
    .then(res => res.json());

  const handleAddToCart = (e, bag) => {
    // console.log("i'm here");
    let bagInCart = false;
    setCartItems(cartItems);

    cartItems.forEach(item => {
      if (item.id === bag.id) {
        bagInCart = true;
        item.count += 1;
      }
    });

    if (!bagInCart) {
      cartItems.push({ ...bag, count: 1 });
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    return cartItems;
  };

  const handleItemRemoval = () => {
    console.log("i'm here");
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


  const sortGenderUse = () => {
    if (sort !== '') {
      bags.sort((a, b) => ((sort === 'lowest') ? (a.price < b.price ? 1 : -1) : (a.price > b.price ? 1 : -1)));
    } else {
      bags.sort((a, b) => (a.id < b.id ? 1 : -1));
    }

    const filtBag = bags.filter(a => a.gender.indexOf(genderUse) >= 0);

    if (genderUse !== '') {
      return { filtBag };
    }
    return setFilteredBags(bags);
  };

  const listGender = () => {
    setState(sortGenderUse);
  };


  const changeGender = e => {
    setGenderUse(e.target.value);
    listGender();
  };

  const handleChangeType = e => {
    setBagType(e.target.value);
    listBags();
  };

  useEffect(() => {
    fetchBags().then(data => setBags(data));
    fetchFiltered().then(data => setFilteredBags(data));
  }, []);

  // console.log(bags);

  return (
    <div className="container">
      <h1>Basic eCommerce page</h1>
      <hr />
      <div className="row">
        <div className="col-md-8">
          <h1>Item component</h1>
          <Filter size={size} sort={sort} changeSize={changeSize} handleChangeType={handleChangeType} count={filteredBags.length} />
          <hr />
          <Bags bags={filteredBags} handleAddToCart={handleAddToCart} />
        </div>
        <div className="col-md-4">
          <Cart cartItems={cartItems} handleItemRemoval={handleItemRemoval} />
        </div>
      </div>
    </div>
  );
};

export default App;
