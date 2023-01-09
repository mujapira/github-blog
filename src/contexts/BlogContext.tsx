import { ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";
import { createContext } from "use-context-selector";
interface BlogContextType {
  user: User | undefined;
  posts: Post[];
  handleSearch: (query: string) => any;
}

interface BlogProviderProps {
  children: ReactNode;
}
interface User {
  userName: string;
  name: string;
  avatar: string;
  createdAt: string;
  followers: number;
  following: number;
  company?: string;
  bio?: string;
}

export interface Post {
  id: string;
  title: string;
  body: string;
  createdAt: string;
}
export const BlogContext = createContext<BlogContextType>({} as BlogContextType);

export function BlogProvider({ children }: BlogProviderProps) {
  const [user, setUser] = useState<User>();
  const [posts, setPosts] = useState<Post[]>([]);

  const githubUser = "mujapira";
  const githubRepo = "github-blog";
  async function fetchUser(query?: string) {
    const response = await api.get(`/users/${githubUser}`, {
      params: {
        q: query,
      },
    });

    const newUser = {
      userName: response.data.login,
      name: response.data.name,
      avatar: response.data.avatar_url,
      createdAt: response.data.created_at,
      followers: response.data.followers,
      following: response.data.following,
      company: response.data.company,
      bio: response.data.bio,
    };
    setUser(newUser);
  }

  async function fetchPosts(query?: string) {
    const response = await api.get(`repos/${githubUser}/${githubRepo}/issues`);

    const postList = response.data;
    const newPostList: Post[] = [];
    postList.forEach((post: any) => {
      const newPost: Post = {
        ...post,
        createdAt: post.created_at,
      };
      newPostList.push(newPost);
    });

    setPosts(newPostList);
  }

  async function handleSearch(query: string) {
    const response = await api.get(`search/issues?q=${query}%20repo:${githubUser}/${githubRepo}`);
    console.log(response.data);
  }

  useEffect(() => {
    fetchUser();
    fetchPosts();
  }, []);

  return (
    <BlogContext.Provider
      value={{
        user,
        posts,
        handleSearch,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}
