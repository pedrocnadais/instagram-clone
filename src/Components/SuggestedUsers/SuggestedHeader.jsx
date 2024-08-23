import { Avatar, Button, Flex, Text } from "@chakra-ui/react";
import useLogout from "../../Hooks/useLogout";
import useAuthStore from "../../Store/authStore";
import { Link } from "react-router-dom";

const SuggestedHeader = () => {
  const { handleLogout, isLoggingOut } = useLogout();
  const authUser = useAuthStore((state) => state.user);

  // fixed error when logging in that turned the page black and had to refresh in order for you to complete the login
  if(!authUser) return null;

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Link to={`${authUser.username}`}>
          <Avatar size={"lg"} src={authUser.profilePicURL} />
        </Link>
        <Link to={`${authUser.username}`}>
          <Text fontSize={12} fontWeight={"bold"}>
            {authUser.username}
          </Text>
        </Link>
      </Flex>
      <Button
        size={"xs"}
        background={"transparent"}
        _hover={{ background: "transparent" }}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        onClick={handleLogout}
        isLoading={isLoggingOut}
        cursor={"pointer"}
      >
        Log out
      </Button>
    </Flex>
  );
};

export default SuggestedHeader;
