import { MdAddShoppingCart } from "react-icons/md";
import { useState } from "react";
import PropTypes from "prop-types";
import { IoMdAddCircle } from "react-icons/io";
import { AiFillMinusCircle } from "react-icons/ai";
import {
  AddToCardStyle,
  Image,
  ItemStyles,
} from "../ui/StylesComponents/ItemStyles";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCustomersOrder } from "../utils/DATA-BASE/DATA-BASE-api";

const Items = ({ dissert }) => {
  const [isActive, setIszActive] = useState(false);
  const queryClient = useQueryClient();
  const { image, category, name, price, id } = dissert;

  //todo this is for creating new orders
  const { data = [], mutate } = useMutation({
    mutationFn: createCustomersOrder,
    onSuccess: () => {
      alert("successfully created order");

      queryClient.invalidateQueries({
        queryKey: ["Customers-Order"],
      });
    },

    onError: (error) => {
      throw new Error(error.message);
    },
  });

  function handleCreateOrder() {
    mutate(dissert);
    console.log("created order");
  }

  return (
    <div>
      <ItemStyles>
        <Image type={`${isActive && "active"}`} src={image} alt="" />

        {!isActive && (
          <AddToCardStyle
            type="addToCart"
            role="button"
            onClick={() => setIszActive(true)}
          >
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

        {isActive && (
          <AddToCardStyle type="cartAmount" role="button">
            <div className="flex flex-row justify-center items-center gap-3 font-light ">
              <p>
                <IoMdAddCircle size="13px" color="var(--Rose-50)" />
              </p>
              <p className="text-[var(--Rose-50)] ">{0}</p>

              <p>
                <AiFillMinusCircle size="13px" color="var(--Rose-50)" />
              </p>
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
