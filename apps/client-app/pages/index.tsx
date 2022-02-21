import { BaseLayout } from '@client-app/layouts';
import createNextPage from '@client-app/utils/createNextPage';
import {
  Container,
  Heading,
  List,
  ListItem,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Card } from '@client-app/components/Card';
import { useListData } from '@sample-nx/client-api';
import { useKeyboardnav } from '@client-app/utils/useKeyboardNav';
import { useEffect, useRef } from 'react';
const Home = () => {
  const { data, isLoading } = useListData();
  const { selectedIndex, setSelectedIndex } = useKeyboardnav(
    data?.allSpecies.totalCount ?? 0
  );
  const itemsRef = useRef(new Array(data?.allSpecies.totalCount ?? 0));

  useEffect(() => {
    if (data) {
      itemsRef.current = itemsRef.current.slice(0, data?.allSpecies.totalCount);
    }
  }, [data]);

  useEffect(() => {
    if (selectedIndex > -1) {
      const itemRef = itemsRef.current[selectedIndex];
      itemRef.focus();
    }
  }, [selectedIndex]);

  const listItemHandler = (index) => {
    setSelectedIndex(index);
    console.log('TODO, redirect', data.allSpecies.species[index]);
  };

  const renderList = () => {
    if (isLoading) {
      // render skeleton loading
      return 'loading';
    }
    return data.allSpecies.species.map((item, index) => {
      return (
        <ListItem
          ref={(el) => (itemsRef.current[index] = el)}
          key={item.id}
          tabIndex={selectedIndex === index ? 1 : 0}
          onClick={() => listItemHandler(index)}
          onKeyPress={() => listItemHandler(index)}
          _focus={{
            borderRadius: 'xl',
            boxShadow: 'rgb(175 214 255 / 50%) 0px 0px 2px 4px',
          }}
          _focusVisible={{
            outline: 'none',
            borderRadius: 'xl',
            boxShadow: 'rgb(175 214 255 / 50%) 0px 0px 2px 4px',
          }}
        >
          <Card p={'4'}>
            <Text fontSize={'lg'} fontWeight="bold" color="brand.600">
              {item.name}
            </Text>
            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing={{ base: '0.5', md: '8' }}
            >
              <Text>{item.classification}</Text>
              <Text>{item.designation}</Text>
              <Text>{item.homeworld?.name}</Text>
            </Stack>
          </Card>
        </ListItem>
      );
    });
  };
  return (
    <Container maxW={{ base: 'container.lg', md: 'container.md' }} py="6">
      <Heading>List Species</Heading>
      <List mt={'8'} spacing={{ base: '4', md: '5' }}>
        {renderList()}
      </List>
    </Container>
  );
};
export default createNextPage(Home, {
  layout: (page) => <BaseLayout>{page}</BaseLayout>,
  protectedRule: 'auth',
});
