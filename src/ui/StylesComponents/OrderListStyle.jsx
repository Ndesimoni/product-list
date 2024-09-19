import styled, { css } from "styled-components";

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #cccc;
  padding-top: 12px;
  padding-bottom: 15px;
  /* flex-direction: column; */
`;

export const Main = styled.main`
  width: 350px;
  ${(props) =>
    props.type !== "list" &&
    css`
      width: 400px;
      position: absolute;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      top: 30%;
    `}
`;
