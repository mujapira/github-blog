import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 300px;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  position: relative;
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .rectangle {
    position: absolute;
    left: 50%;
    bottom: 0px;
    transform: translateX(-50%);
  }
`;
