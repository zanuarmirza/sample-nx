import { Box, Flex, List, ListItem, Stack, Text } from '@chakra-ui/react';
import { Card } from '@client-app/components/Card';
import { useKeyboardnav } from '@client-app/utils/useKeyboardNav';
import { useListData } from '@sample-nx/client-api';
import { ListSpecies } from '@sample-nx/shared-types';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export interface ListSpeciesProps {
  initialData?: ListSpecies;
}

const ListSpeciesItem = ({ initialData }: ListSpeciesProps) => {
  const { data, isLoading } = useListData({ initialData });
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
        <Link href={`/${item.id}`} key={item.id} passHref>
          <Box as="a" display={'block'}>
            <ListItem
              ref={(el) => (itemsRef.current[index] = el)}
              tabIndex={selectedIndex === index ? 1 : 0}
              onClick={() => listItemHandler(index)}
              onKeyPress={() => listItemHandler(index)}
              css={{
                '--border-card': '#ECC94B',
              }}
              _focus={{
                borderRadius: 'xl',
                '--border-card': 'transparent',
                boxShadow:
                  '0 0 0.2rem #fff, 0 0 20px  #ff0, 0 0 3rem rgb(221 17 17 / 70%)',
              }}
              _focusVisible={{
                outline: 'none',
                borderRadius: 'xl',
                boxShadow:
                  '0 0 0.2rem #fff, 0 0 20px  #ff0, 0 0 3rem rgb(221 17 17 / 70%)',
              }}
            >
              <Card
                p={'4'}
                _hover={{
                  backgroundColor: 'gray.800',
                }}
                backgroundColor={'black'}
                border="solid 2px"
                borderColor="var(--border-card)"
              >
                <Text fontSize={'xl'} fontWeight="bold" color="yellow.400">
                  {item.name}
                </Text>
                <Stack
                  direction={{ base: 'column', md: 'row' }}
                  spacing={{ base: '0.5', md: '8' }}
                  justifyContent={'space-between'}
                >
                  <Flex flex={1} direction={{ base: 'row', md: 'column' }}>
                    <Text
                      fontStyle={'italic'}
                      fontWeight="semibold"
                      color="yellow.400"
                      width={{ base: '100px', md: 'inherit' }}
                    >
                      Classification
                    </Text>
                    <Text color="white">{item.classification}</Text>
                  </Flex>
                  <Flex flex={1} direction={{ base: 'row', md: 'column' }}>
                    <Text
                      fontStyle={'italic'}
                      fontWeight="semibold"
                      color="yellow.400"
                      width={{ base: '100px', md: 'inherit' }}
                    >
                      Designation
                    </Text>
                    <Text color="white">{item.designation}</Text>
                  </Flex>
                  <Flex flex={1} direction={{ base: 'row', md: 'column' }}>
                    <Text
                      fontStyle={'italic'}
                      fontWeight="semibold"
                      color="yellow.400"
                      width={{ base: '100px', md: 'inherit' }}
                    >
                      Homeworld
                    </Text>
                    {item.homeworld?.name ? (
                      <Text color="white">{item.homeworld?.name}</Text>
                    ) : (
                      <Text color={'red.400'} fontStyle={'italics'}>
                        ???
                      </Text>
                    )}
                  </Flex>
                </Stack>
              </Card>
            </ListItem>
          </Box>
        </Link>
      );
    });
  };
  return (
    <List mt={'8'} spacing={{ base: '4', md: '5' }}>
      {renderList()}
    </List>
  );
};
export default ListSpeciesItem;
