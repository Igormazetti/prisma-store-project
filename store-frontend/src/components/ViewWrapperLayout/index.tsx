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
    <Box id="box-viewwrapper">
      <Head>
        <title>Prisma Store Project</title>
      </Head>
      <Box w="19rem" h="100vh" bg="#242424">
        <Flex w="100vw" id="main-content" direction="column">
          <Flex
            as="header"
            bg="#242424"
            direction="row"
            borderBottom="0.1rem solid rgba(165, 165, 165, 0.1)"
            color="#FFF"
            ml="19rem"
            h="60px"
            pos="fixed"
            overflow="hidden"
            w="100%"
            align="center"
          >
            <Text mt="40px" ml="40px">
              {title}
            </Text>
          </Flex>
          <Box ml="19rem">{children}</Box>
        </Flex>
      </Box>
    </Box>
  );
}
