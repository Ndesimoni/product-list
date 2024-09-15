import styled from "styled-components";
import { MdAddShoppingCart } from "react-icons/md";

const ItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1px 1px;
  position: relative;
`;
const Image = styled.img`
  width: 229px;
  height: inherit;
  border-radius: 11px;
`;

const AddToCardStyle = styled.div`
  position: absolute;
  border: 1px solid var(--Red);
  background-color: var(--Rose-20);
  width: 6rem;
  right: 0;
  left: 0;
  margin-right: auto;
  margin-left: auto;
  bottom: -7%;
  border-radius: 40px;
  font-size: x-small;
  font-weight: bold;
  padding: 5px 0px;
`;

const Items = ({ dessert }) => {
  // // const { id, image, category, name, price } = deserts;

  return (
    <div>
      <ItemStyles>
        {/* <Image src={image} alt="" /> */}
        <Image src="./images/image-brownie-desktop.jpg" alt="" />

        <AddToCardStyle>
          <div className="flex flex-row justify-center items-center gap-1 font-light">
            <p>
              <MdAddShoppingCart size="15px" color="var(--Red)" />
            </p>
            <p className="text-[var(--Rose-900)]">Add to Card</p>
          </div>
        </AddToCardStyle>
      </ItemStyles>

      <div className="flex flex-col items-start justify-center mt-8 mb-2 text-xs capitalize">
        <p className="text-[var(--Rose-400)] font-mono tracking-tighter">
          berry
        </p>
        <h4 className="text-[var(--Rose-900)] tracking-tighter font-mono">
          love this desert bad
        </h4>
        <p className="text-[var(--Red)]">$7.50</p>
      </div>
    </div>
  );
};

export default Items;
