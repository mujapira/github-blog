import { useContext } from "use-context-selector";
import { BlogContext, Post as IPost } from "../../contexts/BlogContext";
import { Header } from "../../components/Header";
import {
  BodyContainer,
  CardContainer,
  PostContainer,
  PostsContainer,
  SearchContainer,
} from "./styled";
import { Buildings, GithubLogo, Link, Users } from "phosphor-react";
import { dateFormatter } from "../../utils/formatter";
import { date } from "zod";
export function Home() {
  const { user, posts } = useContext(BlogContext);

  function truncate(text: string) {
    text = text.replace(/\#/g, "");
    text = text.replace(/\*/g, "");
    text = text.replace(/\>/g, "");
    text = text.replace(/\</g, "");

    if (text.length > 250) {
      return `${text.substring(0, 250)}...`;
    } else {
      return text;
    }
  }

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
          {posts.map((post: IPost) => {
            let date1 = new Date();
            let date2 = new Date(post.createdAt);
            const diff = Math.abs(date1.getTime() - date2.getTime()) / 3600000;
            let date = dateFormatter.format(new Date(post.createdAt));
            diff.toFixed(2);

            if (diff < 1) {
              diff / 60;
              date = `Há menos de uma hora`;
            } else if (diff < 24) {
              date = `${`Há ${diff.toFixed(0)} hora(s)`}`;
            } else if (diff > 24) {
              diff / 24;
              date = `${`Há ${diff.toFixed(0)} dias(s)`}`;
            } else {
              date = dateFormatter.format(new Date(post.createdAt));
            }

            return (
              <PostContainer key={post.id}>
                <div className="header">
                  <span className="title">{post.title}</span>
                  <span className="date">{date}</span>
                </div>
                <div className="body">
                  <p>{truncate(post.body)}</p>
                </div>
              </PostContainer>
            );
          })}
        </PostsContainer>
      </BodyContainer>
    </>
  );
}
