import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          _hover={{ color: "gray.400" }}
          cursor={"pointer"}
        >
          See All
        </Text>
      </Flex>

      <SuggestedUser
        name="Rod"
        followers={4123}
        avatar="https://bit.ly/dan-abramov"
      />
      <SuggestedUser
        name="Ryan"
        followers={423}
        avatar="https://bit.ly/ryan-florence"
      />
      <SuggestedUser
        name="Reynolds"
        followers={12}
        avatar="https://bit.ly/bode-beast"
      />

      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        © 2024 Built by{" "}
        <Link
          href="https://www.linkedin.com/in/pedrocorsin/"
          target="_blank"
          color={"blue.500"}
          fontSize={14}
        >
          Pedro Corsi
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
