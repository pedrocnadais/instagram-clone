import { Box, Image } from "@chakra-ui/react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import useGetUserProfileById from "../../Hooks/useGetUserProfileById";

const FeedPost = ({ post }) => {
  const {userProfile} = useGetUserProfileById(post.createdBy)
  return (
    <>
      <PostHeader post={post} createrProfile={userProfile} />
      <Box my={2} borderRadius={4} overflow={"hidden"}>
        <Image src={post.imageURL} alt={'FEED POST IMG'} />
      </Box>
      <PostFooter post={post} createrProfile={userProfile} />
    </>
  );
};

export default FeedPost;
