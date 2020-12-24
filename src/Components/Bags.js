/* eslint-disable react/prop-types */
import Currency from '../Helpers/util';

const Bags = ({ bags, handleAddToCart }) => {
  const bagList = bags.map(data => (
    <div key={data.id} className="col-md-4 mb-4">
      <div className="thumbnail text-center">
        <a href={`#${data.id}`} onClick={e => handleAddToCart(e, data)}>
          <img src={data.altImage} alt={data.type} />
          <p>{data.type}</p>
        </a>
        <div>
          <b>{Currency(data.price)}</b>
          <button type="button" className="btn btn-primary" onClick={e => handleAddToCart(e, data)}>Add to Cart</button>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="row">
      {bagList}
    </div>
  );
};

export default Bags;
