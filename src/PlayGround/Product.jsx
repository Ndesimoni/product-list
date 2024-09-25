import PropTypes from "prop-types";

const Product = ({ data }) => {
  console.log(data);
  return (
    <div className="my-5">
      <p>{data.name}</p>
      <p>{data.age}</p>
      <p>{data.profession}</p>
    </div>
  );
};

Product.propTypes = {
  data: PropTypes.any,
};

export default Product;
