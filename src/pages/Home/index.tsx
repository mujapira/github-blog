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
import { Buildings, GithubLogo, Link as LinkIcon, Users } from "phosphor-react";
import { dateFormatter } from "../../utils/formatter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { ChangeEvent, useState } from "react";

export interface Post {
  id: string;
  title: string;
  body: string;
  createdAt: string;
}
const searchFormSchema = zod.object({
  query: zod.string(),
});

type searchFormData = zod.infer<typeof searchFormSchema>;

export function Home() {
  const { user, posts, handleSearch, handlePostState } = useContext(BlogContext);

  const { register, handleSubmit } = useForm<searchFormData>({
    resolver: zodResolver(searchFormSchema),
  });
  const [searchValue, setSearchValue] = useState("");

  function handleSearchChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }

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
                <LinkIcon size={20} weight="fill" />
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

        <SearchContainer onSubmit={handleSubmit(handleSearch(searchValue))}>
          <div>
            <h3>Publicações</h3>
            <span>{posts.length} publicações</span>
          </div>
          <input
            placeholder="Buscar conteúdo"
            {...register("query")}
            value={searchValue}
            required
            onChange={handleSearchChange}
          />
        </SearchContainer>
        <PostsContainer>
          {posts.map((post: IPost) => {
            let date1 = new Date();
            let date2 = new Date(post.createdAt);
            const diff = Math.abs(date1.getTime() - date2.getTime()) / 3600000;
            let date = dateFormatter.format(new Date(post.createdAt));
            diff.toFixed(2);

            if (diff < 1) {
              date = `Há menos de uma hora`;
            } else if (diff < 24) {
              date = `${`Há ${diff.toFixed(0)} hora(s)`}`;
            } else if (diff > 24) {
              date = `${`Há ${(diff / 24).toFixed(0)} dia(s)`}`;
            } else {
              date = dateFormatter.format(new Date(post.createdAt));
            }

            return (
              <PostContainer
                to={`/post/${post.id}`}
                key={post.id}
                onClick={() => handlePostState(post)}
              >
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
