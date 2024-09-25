// import { createContext } from "react";
// import useGetQuery from "../utils/customeHooks/useGetQuery";
// import { Heading } from "../utils/Styles";
// import PropTypes from "prop-types";

// const DesertsContext= createContext()
// const Deserts = ({ children, render }) => {
//   const { desserts } = useGetQuery();
//   return (
//     <div>
//       <Heading>Desserts</Heading>
//       <div className="grid grid-cols-3 gap-4 ">
//         {/* {desserts.map((dissert) => (
//           <Items key={dissert.id} dissert={dissert} />
//         ))} */}
//         {desserts.map(render)}
//       </div>
//     </div>
//   );
// };

// Deserts.propTypes = {
//   children: PropTypes.any,
//   render: PropTypes.any,
// };

// export default Deserts;

import { createContext, useContext } from "react";
import useGetQuery from "../utils/customeHooks/useGetQuery";
import { Heading } from "../utils/Styles";
import PropTypes from "prop-types";
import Items from "./Items";

const DesertsContext = createContext();
const Deserts = ({ children }) => {
  const { desserts } = useGetQuery();

  return (
    <DesertsContext.Provider value={{ desserts }}>
      <div>{children}</div>
    </DesertsContext.Provider>
  );
};

function AllDesert() {
  const { desserts } = useContext(DesertsContext);
  return (
    <div className="grid grid-cols-3 gap-4 ">
      {desserts.map((dissert) => (
        <Items key={dissert.id} dissert={dissert} />
      ))}
    </div>
  );
}

Deserts.AllDesert = AllDesert;
Deserts.Heading = Heading;

Deserts.propTypes = {
  children: PropTypes.any,
  render: PropTypes.any,
};

export default Deserts;
