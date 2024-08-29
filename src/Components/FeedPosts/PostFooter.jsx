import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../Assets/constants";
import { useRef, useState } from "react";
import usePostComment from "../../Hooks/usePostComment";
import useAuthStore from "../../Store/authStore";
import useLikePost from "../../Hooks/useLikePost";
import { timeAgo } from "../../Utils/timeAgo";
import CommentsModal from "../../Components/Modals/CommentsModal";

const PostFooter = ({ post, isProfilePage, creatorProfile }) => {
  const { isCommenting, handlePostComment } = usePostComment();
  const [comment, setComment] = useState("");
  const authUser = useAuthStore((state) => state.user);
  const commentRef = useRef(null);
  const { handleLikePost, isLiked, likes } = useLikePost(post);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmitComment = async () => {
    await handlePostComment(post.id, comment);
    setComment("");
  };

  return (
      <Box mb={10} marginTop={"auto"}>
        <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={"2"}>

          {/* like button */}
          <Box onClick={handleLikePost} cursor={"pointer"} fontSize={18}>
            {!isLiked ? <NotificationsLogo /> : <UnlikeLogo />}
          </Box>

          {/* comment button/logo */}
          <Box
            cursor={"pointer"}
            fontSize={18}
            onClick={() => commentRef.current.focus()}
          >
            <CommentLogo />
          </Box>
        </Flex>

        {/* number of likes */}
        <Text fontWeight={600} fontSize={"sm"}>
          {likes} likes
        </Text>

        {isProfilePage && (
          <Text fontSize={12} color={"gray"}>
            Posted {timeAgo(post.createdAt)}
          </Text>
        )}

        {!isProfilePage && (
          <>
            {/* post subtitle */}
            <Text fontWeight={700} fontSize={"sm"}>
              {creatorProfile?.username}{" "}
              <Text as="span" fontWeight={400}>
                {post.caption}
              </Text>
            </Text>

            {/* number of comments/see all comments */}
            {post.comments.length > 0 && (
              <Text
                color={"gray"}
                fontSize={"sm"}
                cursor={"pointer"}
                onClick={onOpen}
              >
                View all {post.comments.length} comments
              </Text>
            )}
            {/* comments modal only @ home page */}
            {isOpen ? <CommentsModal isOpen={isOpen} onClose={onClose} post={post} /> : null}
          </>
        )}
        
        {authUser && (
          <Flex
            alignItems={"center"}
            gap={2}
            justifyContent={"space-between"}
            w={"full"}
          >
            <InputGroup>
              <Input
                variant={"flushed"}
                placeholder={"Add a comment..."}
                fontSize={14}
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                ref={commentRef}
              />
              <InputRightElement>
                <Button
                  fontSize={14}
                  color={"blue.500"}
                  fontWeight={600}
                  cursor={"pointer"}
                  _hover={{ color: "white" }}
                  bg={"transparent"}
                  onClick={handleSubmitComment}
                  isLoading={isCommenting}
                >
                  Post
                </Button>
              </InputRightElement>
            </InputGroup>
          </Flex>
        )}
      </Box>
  );
};

export default PostFooter;
