import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested For You
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          cursor={"pointer"}
          _hover={{ color: "gray.400" }}
        >
          See All
        </Text>
      </Flex>
      <SuggestedUser
        name="Dan abraham"
        followers={1390}
        avatar={
          "https://img.freepik.com/premium-photo/anime-male-avatar_950633-917.jpg"
        }
      />
      <SuggestedUser
        name="kevin"
        followers={1500}
        avatar={
          "https://img.freepik.com/premium-vector/anime-cartoon-character-vector-illustration_648489-34.jpg"
        }
      />
      <SuggestedUser
        name="ben"
        followers={4500}
        avatar={
          "https://img.freepik.com/premium-photo/cute-asian-girl-kawaii-anime-avatar-ai-generative-art_225753-12243.jpg"
        }
      />

      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        © 2023 Built By <Link>asaProgrammer</Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
