import "./Flat.scss";

const Flat = ({ price, name, imageUrl, priceCurrency }) => {
  return (
    <div className="flat">
      <img className="flat-picture" src={imageUrl} alt={name} />
      <div className="flat-title">
        <strong className="me-1">
          {price} {priceCurrency}
        </strong>{" "}
        - {name}
      </div>
    </div>
  );
};

export default Flat;
