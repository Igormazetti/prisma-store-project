import { Box, Flex, Text } from "@chakra-ui/react";

export default function Login() {
  return (
    <Flex
      bg="rgb(0,0,1);"
      bgImage="linear-gradient(128deg, rgba(0,0,1,1) 0%, rgba(0,1,3,1) 67%, rgba(3,40,43,1) 92%, rgba(6,61,64,1) 100%)"
      w="100%"
      h="full"
      p={4}
      color="white"
      align="center"
      justify="center"
    >
      <Box
        bg="linear-gradient(50deg, rgba(16,18,18,1) 0%, rgba(16,18,18,1) 54%, rgba(17,37,40,1) 70%, rgba(9,58,61,1) 98%)"
        maxW="600"
        w="full"
        h="500"
        display="flex"
        rounded="25"
        opacity="0.5"
        p="25"
      ></Box>
    </Flex>
  );
}
