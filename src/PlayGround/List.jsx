import PropTypes from "prop-types";
import { data } from "./DB";

const List = ({ render }) => {
  return <div>{data.map(render)}</div>;
};

List.propTypes = {
  product: PropTypes.any,
  render: PropTypes.any,
};
export default List;
