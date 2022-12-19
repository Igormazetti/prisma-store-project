import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import ViewWrapperLayout from '../../components/ViewWrapperLayout';

export default function Dashboard() {
  return (
    <ViewWrapperLayout data-testid="view-wrapper">
      <Box>
        <Text>Dashboard Page</Text>;
      </Box>
    </ViewWrapperLayout>
  );
}
