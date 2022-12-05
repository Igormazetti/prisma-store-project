import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

export default function Dashboard() {
  return (
    <Flex
      bg="rgb(215,215,215);"
      bgImage="linear-gradient(144deg, #d6d3d3 64%, rgba(17,64,77,1) 97%)"
      w="100%"
      h="full"
      p={4}
    >
      <Box as="header" width="100%" height="100px" border="1px solid black">
        <Text>Dashboard Page</Text>;
      </Box>
    </Flex>
  );
}
