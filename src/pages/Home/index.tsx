import { useContext } from "use-context-selector";
import { BlogContext } from "../../contexts/BlogContext";
import { Header } from "../../components/Header";
import {
  BodyContainer,
  CardContainer,
  PostContainer,
  PostsContainer,
  SearchContainer,
} from "./styled";
import { Buildings, GithubLogo, Link, Users } from "phosphor-react";

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

          <div className="content">
            <span className="name">
              {user?.name}
              <a className="link" href={`https://github.com/${user?.userName}`}>
                GITHUB
                <Link size={20} weight="fill" />
              </a>
            </span>
            <span>{user?.bio}</span>
            <div className="tags">
              <div>
                <div className="icon">
                  <GithubLogo size={20} weight="fill" />
                </div>
                <a href={`https://github.com/${user?.userName}`}> {user?.userName}</a>
              </div>
              <div>
                <div className="icon">
                  <Buildings size={20} weight="fill" />
                </div>
                <a href={`https://github.com/${user?.company}`}> {user?.company}</a>
              </div>
              <div>
                <div className="icon">
                  <Users size={20} weight="fill" />
                </div>
                <a href={`https://github.com/${user?.userName}?tab=followers`}>
                  {user?.followers} seguidores
                </a>
              </div>
            </div>
          </div>
        </CardContainer>

        <SearchContainer>
          <div>
            <h3>Publicações</h3>
            <span>Count de publicações</span>
          </div>
          <input type="text" name="" id="" />
          <button></button>
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
