import styled from "styled-components";

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  max-width: 1440px;
  margin: 0 auto;
`;

export const CardContainer = styled.div`
  max-width: 864px;
  max-height: 212px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;

  position: absolute;
  left: 50%;
  top: -88px;
  transform: translateX(-50%);
  z-index: 20;

  background-color: ${(props) => props.theme["base-profile"]};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  .image-container {
    max-width: 148px;
    max-height: 148px;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const SearchContainer = styled.div`
  margin-top: 164px;
`;

export const PostsContainer = styled.div``;

export const PostContainer = styled.div``;
