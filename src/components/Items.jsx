import styled from "styled-components";

const ItemStyles = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 1px 1px;
  position: relative;
`;
const Image = styled.img`
  width: 250px;
  height: inherit;
  border-radius: 5px;
`;

const AddToCardStyle = styled.div`
  position: absolute;
  color: red;
  background-color: #f3a41d;
  bottom: 28%;
  right: 37%;
  padding: 0px 15px;
  border-radius: 40px;
  font-size: x-small;
  font-weight: bold;
`;

const Items = () => {
  return (
    <ItemStyles>
      <Image src="./images/image-brownie-desktop.jpg" alt="" />
      <AddToCardStyle>
        <p>
          {" "}
          <span>%</span>Add to card
        </p>
      </AddToCardStyle>
      <div>
        <p>berry</p>
        <h4>love this desert bad</h4>
        <p>7.50</p>
      </div>
    </ItemStyles>
  );
};

export default Items;
