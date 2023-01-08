import styled from "styled-components";

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
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
  justify-content: flex-start;
  gap: 30px;

  position: absolute;
  left: 50%;
  top: -88px;
  transform: translateX(-50%);
  z-index: 20;

  padding: 23px 40px;

  background-color: ${(props) => props.theme["base-profile"]};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  .name {
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    font-size: 1.5rem;
    color: ${(props) => props.theme["base-title"]};

    .link {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      font-style: normal;
      font-weight: 700;
      font-size: 0.75rem;
      color: ${(props) => props.theme["blue"]};
      text-decoration: none;
    }
  }
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
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    .tags {
      display: flex;
      width: 100%;
      gap: 24px;
      margin-top: 40px;

      > div {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 8px;

        a {
          text-decoration: none;
          color: ${(props) => props.theme["base-subtitle"]};
        }
      }
      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        width: auto;
        height: auto;
        background-color: ${(props) => props.theme["base-profile"]};

        svg {
          color: ${(props) => props.theme["base-label"]};
        }
      }
    }
  }
`;

export const SearchContainer = styled.div`
  margin-top: 164px;
  button {
    width: 40px;
    height: 50px;
  }
`;

export const PostsContainer = styled.div``;

export const PostContainer = styled.div``;
