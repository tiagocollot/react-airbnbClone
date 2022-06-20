import "./Flat.scss";

const Flat = ({ price, name }) => {
  return (
    <div className="flat">
      <img className="flat-picture" />
      <div className="flat-title">{price} - {name}</div>
    </div>
  );
};

export default Flat;
