import useGetQuery from "../utils/customeHooks/useGetQuery";
import { Heading } from "../utils/Styles";
import Items from "./Items";
import PropTypes from "prop-types";
const Deserts = () => {
  const { desserts } = useGetQuery();
  return (
    <div>
      <Heading>Desserts</Heading>
      <div className="grid grid-cols-3 gap-4 ">
        {desserts.map((dissert) => (
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
