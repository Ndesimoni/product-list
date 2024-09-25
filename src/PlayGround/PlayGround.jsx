import List from "./List";
import Product from "./Product";

const PlayGround = () => {
  return (
    <div>
      <List render={(e, i) => <Product key={i} data={e} />} />
    </div>
  );
};

export default PlayGround;
