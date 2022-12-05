import { FiLogOut } from 'react-icons/fi';
import { useRouter } from 'next/router';
import {
  List,
  ListItem,
  Text,
  Flex,
  Button,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react';

import { BsGrid, BsBriefcase, BsPerson, BsChat } from 'react-icons/bs';

export default function Sidebar() {
  const { push } = useRouter();

  const handleRedirect = (route: string) => {
    push({ pathname: route });
  };

  return (
    <Flex
      as="aside"
      direction="column"
      h="100vh"
      p="3.2rem"
      pos="fixed"
      maxW="30rem"
      minW="30rem"
      bg="#242424"
    >
      <h1>Título do Aplicativo</h1>

      <List spacing={3}>
        <span>Navegação</span>
        <ListItem onClick={() => handleRedirect('produtos')}>
          <Text>Produtos</Text>
        </ListItem>
        <ListItem onClick={() => handleRedirect('vendas')}>
          <Text>Vendas</Text>
        </ListItem>
        <ListItem onClick={() => handleRedirect('usuario')}>
          <Text>Usuário</Text>
        </ListItem>
      </List>

      <Button colorScheme="#A5A5A5">
        <FiLogOut size={20} />
      </Button>
    </Flex>
  );
}
