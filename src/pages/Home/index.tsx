import { useContext } from "use-context-selector";
import { BlogContext } from "../../contexts/BlogContext";
import { Header } from "./components/Header";
import {
  BodyContainer,
  CardContainer,
  PostContainer,
  PostsContainer,
  SearchContainer,
} from "./styled";

export function Home() {
  const { user } = useContext(BlogContext);

  return (
    <>
      <Header />
      <BodyContainer>
        <CardContainer>
          <div className="image-container">
            <img src={user?.avatar} alt="" />
          </div>

          <span>Hi, {user?.name}</span>
        </CardContainer>

        <SearchContainer>
          <div>
            <h3>Publicações</h3>
            <span>Count de publicações</span>
          </div>
          <input type="text" name="" id="" />
        </SearchContainer>

        <PostsContainer>
          <PostContainer>1</PostContainer>
          <PostContainer>2</PostContainer>
          <PostContainer>3</PostContainer>
          <PostContainer>4</PostContainer>
        </PostsContainer>
      </BodyContainer>
    </>
  );
}
