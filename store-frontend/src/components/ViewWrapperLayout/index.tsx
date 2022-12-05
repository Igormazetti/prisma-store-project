import Head from 'next/head';
import React from 'react';

import { Text, Flex, Box } from '@chakra-ui/react';

type ViewWrapperLayoutProps = {
  children: React.ReactNode;
  title: string;
};

export default function ViewWrapperLayout({
  children,
  title,
}: ViewWrapperLayoutProps) {
  return (
    <Box h="100vh">
      <Head>
        <title>Prisma Store Project</title>
      </Head>
      <Box w="300px" h="100vh" bg="#242424">
        <Flex
          as="header"
          bg="#242424"
          direction="row"
          borderBottom="0.1rem solid rgba(165, 165, 165, 0.1)"
          color="#FFF"
          pos="absolute"
          h="60px"
          w="100%"
        >
          <Text>{title}</Text>
        </Flex>
        <Flex>
          <Box ml="300px" mt="60px">
            {children}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
