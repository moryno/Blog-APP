import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";

import PostListItem from "./PostListItem";
import { postService } from "../../../services/post.service";
import { useSearchParams } from "react-router-dom";

const PostList = () => {
  const [searchparams] = useSearchParams();

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["posts", searchparams.toString()],
    queryFn: ({ pageParam = 1 }) => {
      const searchParamsObj = Object.fromEntries([...searchparams]);

      return postService.getPosts({
        page: pageParam,
        limit: 10,
        ...searchParamsObj,
      });
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage.hasMore ? pages.length + 1 : undefined,
  });
  if (isFetching) return <p>Loading...</p>;
  if (!isFetching && error) return "An error has occured: " + error.message;

  const allPosts = data?.pages?.flatMap((page) => page.posts) || [];

  return (
    <InfiniteScroll
      dataLength={allPosts.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<h4>Loading more posts...</h4>}
      endMessage={
        <p>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      {allPosts.map((post) => (
        <PostListItem key={post._id} post={post} />
      ))}
    </InfiniteScroll>
  );
};

export default PostList;
