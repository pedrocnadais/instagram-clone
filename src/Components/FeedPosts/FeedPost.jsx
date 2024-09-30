import { Box, Image } from "@chakra-ui/react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import useGetUserProfileById from "../../Hooks/useGetUserProfileById";

const FeedPost = ({ post }) => {
  const { userProfile } = useGetUserProfileById(post.createdBy);
  return (
    <>
      <PostHeader post={post} creatorProfile={userProfile} />
      <Box my={2} borderRadius={4} overflow={"hidden"}>
        <Image
          src={post.imageURL}
          alt={"FEED POST IMG"}
          // added onError 30/09
          // onError={(e) => {
          //   e.target.src = "fallback-image-url"; // replace with a valid fallback image URL
          //   e.target.alt = "Image not available"; // optional, to clarify the situation
          // }}
        />
      </Box>
      <PostFooter post={post} creatorProfile={userProfile} />
    </>
  );
};

export default FeedPost;
