import { ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";
import { createContext } from "use-context-selector";

interface BlogContextType {}

interface BlogsProviderProps {
  children: ReactNode;
}
interface Blog {}

export const BlogsContext = createContext<BlogContextType>({} as BlogContextType);

export function BlogsProvider({ children }: BlogsProviderProps) {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  async function fetchBlogs(query?: string) {
    const response = await api.get("/blogs", {
      params: {
        _sort: "createdAt",
        _order: "desc",
        q: query,
      },
    });
    setBlogs(response.data);
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <BlogsContext.Provider
      value={{
        blogs,
      }}
    >
      {children}
    </BlogsContext.Provider>
  );
}
