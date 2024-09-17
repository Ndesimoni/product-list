import { Heading } from "../utils/Styles";
import Items from "./Items";
import PropTypes from "prop-types";
const Deserts = ({ disserts }) => {
  return (
    <div>
      <Heading>Desserts</Heading>
      <div className="grid grid-cols-3 gap-4 ">
        {disserts.map((dissert) => (
          <Items key={dissert.id} dissert={dissert} />
        ))}
      </div>
    </div>
  );
};

Deserts.propTypes = {
  disserts: PropTypes.any,
};

export default Deserts;
