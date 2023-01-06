import { useContext } from "use-context-selector";
import { BlogContext } from "../../contexts/BlogContext";

export function Home() {
  const { user } = useContext(BlogContext);

  return (
    <>
      <div>
        <span>Hi, {user?.name}</span>
        <img src={user?.avatar} alt="" />
      </div>
    </>
  );
}
