/* eslint-disable react/prop-types */
import React from 'react';
import Currency from '../Helpers/util';


const Cart = ({ cartItem, handleItemRemoval }) => {
  const pluralize = val => {
    if (val <= 1) {
      return 'bag';
    }

    return 'bags';
  };

  return (
    <div className="alert alert-info">
      {cartItem.length === 0 ? ' Your Cart is empty' : (
        <div>
          {' '}
          <p>
            You have
            {' '}
            {cartItem.length}
            {' '}
            {pluralize(cartItem.length)}
            {' '}
            in your Cart
          </p>
        </div>
      )}
      {cartItem.length > 0
        && (
        <div>
          <ul>
            {cartItem.map(data => (
              <li key={data.id}>
                <b>{data.type}</b>
                x
                {' '}
                {data.count}
                {' '}
                =
                {' '}
                {data.price * data.count}
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={e => handleItemRemoval(e, data)}
                >
                  {' '}
                  {' '}
                  X

                </button>
              </li>
            ))}
          </ul>
          Total:
          {' '}
          {Currency(cartItem.reduce((a, c) => a + c.price * c.count, 0))}
          <br />
          {/* No. of Item in cart
          {' '}
          {cartItem.reduce((a, c) => a + c.count, 0)} */}
        </div>
        )}
      {cartItem.length === 0 ? ' ' : (<button type="button" className="btn btn-primary">Checkout</button>)}

    </div>
  );
};

export default Cart;
