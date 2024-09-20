import { MdAddShoppingCart } from "react-icons/md";
import PropTypes from "prop-types";
import { IoMdAddCircle } from "react-icons/io";
import { AiFillMinusCircle } from "react-icons/ai";
import {
  AddToCardStyle,
  Image,
  ItemStyles,
} from "../ui/StylesComponents/ItemStyles";
import useCardQuantity from "../utils/customeHooks/useCardQuantity";
import useCreateNewOrder from "../utils/customeHooks/useCreateNewOrder";
import useGetQuery from "../utils/customeHooks/useGetQuery";

const Items = ({ dissert }) => {
  const { customersOrders } = useGetQuery();

  const { itemQuantity, setItemQuantity, updateQuantity } = useCardQuantity();
  const { mutate } = useCreateNewOrder();

  const { image, category, name, price, id } = dissert;

  let currentDeleteId;
  for (let i = 0; i < customersOrders.length; i++) {
    currentDeleteId = currentDeleteId = customersOrders[i].id;
  }
  const isActive = currentDeleteId === id;

  ///////////////////////////////////////////////////

  const current = customersOrders
    .map((ell) => {
      return ell.id;
    })
    .filter((itemsId) => {
      return itemsId === id;
    });

  console.log(current);

  /////////////////////////////////////////////////////////////
  //todo: create new  ordered
  function handleCreateOrder() {
    mutate(dissert);
  }

  //todo set the amount ordered
  function handleItemQuantityMinus() {
    if (itemQuantity <= 0) return;
    setItemQuantity((item) => item - 1);
    const newQuantity = { ...dissert, quantity: itemQuantity - 1 };
    updateQuantity(newQuantity);
  }

  function handleItemQuantityAdd() {
    setItemQuantity((item) => item + 1);
    const newQuantity = { ...dissert, quantity: itemQuantity + 1 };
    updateQuantity(newQuantity);
  }

  return (
    <div>
      <ItemStyles>
        <Image type={`${isActive && "active"}`} src={image} alt="" />

        {!isActive && (
          <AddToCardStyle type="addToCart" role="button">
            <div
              onClick={handleCreateOrder}
              className="flex flex-row justify-center items-center gap-1 font-light"
            >
              <p>
                <MdAddShoppingCart size="15px" color="var(--Red)" />
              </p>
              <p className="text-[var(--Rose-900)]"> Add To Cart </p>
            </div>
          </AddToCardStyle>
        )}

        {/* //todo this handles cart quantity */}
        {isActive && (
          <AddToCardStyle type="cartAmount" role="button">
            <div className="flex flex-row justify-center items-center gap-3 font-light ">
              <AiFillMinusCircle
                size="13px"
                color="var(--Rose-50)"
                onClick={handleItemQuantityMinus}
              />
              <p className="text-[var(--Rose-50)] ">{itemQuantity}</p>

              <IoMdAddCircle
                size="13px"
                color="var(--Rose-50)"
                onClick={handleItemQuantityAdd}
              />
            </div>
          </AddToCardStyle>
        )}
      </ItemStyles>

      <div className="flex flex-col items-start justify-center mt-8 mb-2 text-xs capitalize">
        <p className="text-[var(--Rose-400)] font-mono tracking-tighter">
          {category}
        </p>
        <h4 className="text-[var(--Rose-900)] tracking-tighter font-mono">
          {name}
        </h4>
        <p className="text-[var(--Red)]">${price}</p>
      </div>
    </div>
  );
};

Items.propTypes = {
  dissert: PropTypes.any,
};

export default Items;

// for (let i = 0; i < customersOrders.length; i++) {
//   currentActiveItems.push(customersOrders[i].id);
//   for (let j = 0; j < desserts.length; j++) {
//     activeItems = activeItems = desserts[j];
//   }
// }
// console.log(currentActiveItems.includes(id));
