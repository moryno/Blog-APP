import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";

import PostListItem from "./PostListItem";
import { postService } from "../../../services/post.service";
import { useSearchParams } from "react-router-dom";
import SkeletonComponent from "../../../lib/Skeleton/Skeleton";

const MoreLoader = () => (
  <div className="w-full p-5 mt-5 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-gray-300 border-t-teal-700 rounded-full animate-spin"></div>
  </div>
);

const PostList = () => {
  const [searchparams] = useSearchParams();

  const { data, error, fetchNextPage, hasNextPage, isFetching } =
    useInfiniteQuery({
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

  if (!isFetching && error) return "An error has occured: " + error.message;

  const allPosts = data?.pages?.flatMap((page) => page.posts) || [];

  return (
    <InfiniteScroll
      dataLength={allPosts.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<MoreLoader />}
      endMessage={
        isFetching ? (
          Array(10)
            .fill(0)
            .map((i) => <SkeletonComponent key={i} />)
        ) : (
          <p className="w-full p-5 mt-5 flex items-center justify-center">
            <b>Yay! You have seen it all</b>
          </p>
        )
      }
    >
      {allPosts.map((post) => (
        <PostListItem key={post._id} post={post} />
      ))}
    </InfiniteScroll>
  );
};

export default PostList;
