import { useQuery } from "@tanstack/react-query";
import PostListItem from "./PostListItem";
import { postService } from "../../../services/post.service";

const PostList = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: () => postService.getPosts(),
  });

  if (isPending) return <p>Loading...</p>;
  if (error) return "An error has occured: " + error.message;

  console.log(data);
  return (
    <section className="flex flex-col gap-12 mb-8">
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
    </section>
  );
};

export default PostList;
