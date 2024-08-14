import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { CommentLogo, UnlikeLogo } from "../../Assets/constants";
import { NotificationsLogo } from "../../Assets/constants";
import { useState } from "react";

const PostFooter = ({ username, isProfilePage }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(1000);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };

  return (
    <>
      <Box mb={10} marginTop={"auto"}>
        <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={"2"}>
          {/* like button */}
          <Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
            {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
          </Box>
          {/* comment button/logo */}
          <Box cursor={"pointer"} fontSize={18}>
            <CommentLogo />
          </Box>
        </Flex>
        {/* number of likes */}
        <Text fontWeight={600} fontSize={"sm"}>
          {likes} likes
        </Text>
        {!isProfilePage && (
          <>
            {/* post subtitle */}
            <Text fontWeight={700} fontSize={"sm"}>
              {username}{" "}
              <Text as="span" fontWeight={400}>
                Feeling good
              </Text>
            </Text>
            {/* number of comments/see all comments */}
            <Text color={"gray"} fontSize={"sm"} cursor={"pointer"}>
              View all 1,320 comments
            </Text>
          </>
        )}

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
            />
            <InputRightElement>
              <Button
                fontSize={14}
                color={"blue.500"}
                fontWeight={600}
                cursor={"pointer"}
                _hover={{ color: "white" }}
                bg={"transparent"}
              >
                Post
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      </Box>
    </>
  );
};

export default PostFooter;
