import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import ViewWrapperLayout from 'components/ViewWrapperLayout';

export default function Dashboard() {
  return (
    <ViewWrapperLayout title="Home">
      <Box
        as="main"
        overflow="hidden"
        pos="fixed"
        mt="60px"
        border="1px solid black"
        w="100%"
      >
        <Text>Dashboard Page</Text>;
      </Box>
    </ViewWrapperLayout>
  );
}
