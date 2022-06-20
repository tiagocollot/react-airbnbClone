import "./Flat.scss";

const Flat = ({ price, name, image }) => {
  return (
    <div className="flat">
      <img className="flat-picture" src={image} alt={name} />
      <div className="flat-title">{price} - {name}</div>
    </div>
  );
};

export default Flat;
