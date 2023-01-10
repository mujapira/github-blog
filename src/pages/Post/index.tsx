import React from "react";
import { BlogContext, Post as IPost } from "../../contexts/BlogContext";
import { dateFormatter } from "../../utils/formatter";
import * as DOMPurify from "dompurify";
import { Buildings, CalendarBlank, CaretLeft, Chat, GithubLogo, Link, Users } from "phosphor-react";
import { Header } from "../../components/Header";
import { BodyContainer, CardContainer, PostContainer, PostsContainer } from "./styled";
import { useContext } from "use-context-selector";
import { marked } from "marked";
import sanitizeHtml from "sanitize-html";

export function Post() {
  const { user, post } = useContext(BlogContext);

  function getDate() {
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
    return date;
  }

  return (
    <>
      <Header />
      <BodyContainer>
        <CardContainer>
          <div className="content">
            <span className="name">
              <a className="link" href={"/"}>
                <CaretLeft size={16} weight="light" />
                VOLTAR
              </a>

              <a className="link" href={`https://github.com/${user?.userName}`}>
                VER NO GITHUB
                <Link size={20} weight="fill" />
              </a>
            </span>
            <div className="header">
              <span className="title">{post.title}</span>
            </div>

            <div className="tags">
              <div>
                <div className="icon">
                  <GithubLogo size={20} weight="fill" />
                </div>
                <a href={`https://github.com/${user?.userName}`}> {user?.userName}</a>
              </div>
              <div>
                <div className="icon">
                  <CalendarBlank size={16} weight="fill" />
                </div>
                <span className="date">{post.createdAt}</span>
              </div>
              <div>
                <div className="icon">
                  <Chat size={16} weight="fill" />
                </div>
                <span>{post.comments} comentário(s)</span>
              </div>
            </div>
          </div>
        </CardContainer>

        <PostsContainer>
          <PostContainer key={post.id}>
            <div
              className="body"
              dangerouslySetInnerHTML={{ __html: sanitizeHtml(marked.parse(post.body)) }}
            ></div>
          </PostContainer>
        </PostsContainer>
      </BodyContainer>
    </>
  );
}
