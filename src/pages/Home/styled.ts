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
  max-width: 864px;
`;

export const CardContainer = styled.div`
  width: 100%;
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

export const SearchContainer = styled.form`
  margin-top: 164px;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 50px;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
    }
    span {
      color: ${(props) => props.theme["base-span"]};
      font-size: 0.875rem;
    }
  }
  
  input {
    color: ${(props) => props.theme["base-label"]};
    border: 1px solid ${(props) => props.theme["base-border"]};
    background-color: ${(props) => props.theme["base-input"]};
    padding: 12px 16px;
    width: 100%;
    font-weight: 400;
    border-radius: 6px;
    font-size: 1rem;
  }
`;

export const PostsContainer = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  gap: 32px;
  width: 100%;
`;

export const PostContainer = styled.div`
  padding: 32px;
  border-radius: 10px;
  background-color: ${(props) => props.theme["base-post"]};
  display: flex;
  flex-direction: column;
  gap: 20px;

  .header {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    .title {
      font-style: normal;
      font-weight: 700;
      font-size: 1.25rem;
      max-width: 250px;
      color: ${(props) => props.theme["base-title"]};
    }
    .date {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      color: ${(props) => props.theme["base-span"]};
    }
  }

  .body {
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      color: ${(props) => props.theme["base-text"]};
      text-overflow: ellipsis;
      text-align: justify;
    }
  }
`;
