import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import ViewWrapperLayout from 'components/ViewWrapperLayout';

export default function Dashboard() {
  return (
    <ViewWrapperLayout title="Home">
      <Box as="header" width="100%" height="100px" border="1px solid black">
        <Text>Dashboard Page</Text>;
      </Box>
    </ViewWrapperLayout>
  );
}
