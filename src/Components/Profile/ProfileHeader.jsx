import {
  Avatar,
  AvatarGroup,
  Button,
  Flex,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import useUserProfileStore from "../../Store/userProfileStore";
import useAuthStore from "../../Store/authStore";
import EditProfile from "./EditProfile";

const ProfileHeader = () => {
  const {userProfile} = useUserProfileStore();
  const authUser = useAuthStore(state => state.user)
  const visitingOwnProfileAndAuth = authUser && authUser.username === userProfile.username;
  const visitingAnotherProfileAndAuth = authUser && authUser.username !== userProfile.username;
  const {isOpen, onOpen, onClose} = useDisclosure()

  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
    >
      {/* profile picture */}
      <AvatarGroup
        size={{ base: "xl", md: "2xl" }}
        justifySelf={"center"}
        alignSelf={"flex-start"}
        mx={"auto"}
      >
        <Avatar
          src={userProfile.profilePicURL}
          alt="As a programmer logo"
        />
      </AvatarGroup>

      {/* username, edit profile/follow button, posts, followers, following, profile name, bio */}
      <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
        <Flex
          gap={4}
          direction={{ base: "column", sm: "row" }}
          justifyContent={{ base: "center", sm: "flex-start" }}
          alignItems={"center"}
          w={"full"}
        >
          {/* username */}
          <Text fontSize={{ base: "sm", md: "lg" }}>{userProfile.username}</Text>

          {/* edit profile button */}
          {visitingOwnProfileAndAuth && (
            <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
              <Button bg={"white"} color={"black"} _hover={{ bg: "whiteAlpha.800" }} size={{ base: "xs", md: "sm" }} onClick={onOpen}>
                Edit Profile
              </Button>
            </Flex>
          )}
          {/* follow or unfollow button */}
          {visitingAnotherProfileAndAuth && (
            <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
              <Button bg={"blue.500"} color={"white"} _hover={{ bg: "blue.600" }} size={{ base: "xs", md: "sm" }}>
                Follow/Unfollow
              </Button>
            </Flex>
          )}
          
        </Flex>

        {/* posts, followers, following */}
        <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>

          {/* posts */}
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as="span" fontWeight={"bold"} mr={1}>
              {userProfile.posts.length}
            </Text>
            Posts
          </Text>

          {/* followers */}
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as="span" fontWeight={"bold"} mr={1}>
              {userProfile.followers.length}
            </Text>
            Followers
          </Text>

          {/* following */}
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as="span" fontWeight={"bold"} mr={1}>
              {userProfile.following.length}
            </Text>
            Following
          </Text>
        </Flex>

        {/* profile name */}
        <Flex alignItems={"center"} gap={4}>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            {userProfile.fullName}
          </Text>
        </Flex>

        {/* bio */}
        <Text fontSize={"sm"}>{userProfile.bio}</Text>
      </VStack>
      {isOpen && <EditProfile isOpen={isOpen} onClose={onClose} />}
    </Flex>
  );
};

export default ProfileHeader;
