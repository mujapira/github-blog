import { ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";
import { createContext } from "use-context-selector";
interface BlogContextType {
  user: User | undefined;
}

interface BlogProviderProps {
  children: ReactNode;
}
interface User {
  userName: string;
  name: string;
  avatar: string;
  createdAt: Date;
  followers: number;
  following: number;
  company?: string;
  bio?: string;
}

export const BlogContext = createContext<BlogContextType>({} as BlogContextType);

export function BlogProvider({ children }: BlogProviderProps) {
  const [user, setUser] = useState<User>();

  async function fetchUser(query?: string) {
    const response = await api.get(`/users/mujapira`, {
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
      bio: response.data.bio
    };
    setUser(newUser);
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <BlogContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}
