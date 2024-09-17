import styled, { css } from "styled-components";

export const ItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1px 1px;
  position: relative;
`;
export const Image = styled.img`
  ${(props) =>
    props.type == "active" &&
    css`
      border: 1px solid var(--Red);
    `}
  width: 229px;
  height: inherit;
  border-radius: 11px;
`;

export const AddToCardStyle = styled.div`
  ${(props) =>
    props.type === "cartAmount" &&
    css`
      /* border: 1px solid var(--Rose-900); */
      border: 1px solid green;
      background-color: var(--Red);
    `}

  ${(props) =>
    props.type == "addToCart" &&
    css`
      border: 1px solid var(--Red);
      background-color: var(--Rose-20);
    `}
  position: absolute;
  width: 6rem;
  right: 0;
  left: 0;
  margin-right: auto;
  margin-left: auto;
  bottom: -6%;
  border-radius: 40px;
  font-size: x-small;
  font-weight: bold;
  padding: 5px 0px;
`;
