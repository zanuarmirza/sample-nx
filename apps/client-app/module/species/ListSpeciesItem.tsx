import { Flex, List, ListItem, Stack, Text } from '@chakra-ui/react';
import { Card } from '@client-app/components/Card';
import { useKeyboardnav } from '@client-app/utils/useKeyboardNav';
import { useListData } from '@sample-nx/client-api';
import { ListSpecies } from '@sample-nx/shared-types';
import { useEffect, useRef } from 'react';

export interface ListSpeciesProps{
  initialData?:ListSpecies
}

const ListSpeciesItem = ({initialData}:ListSpeciesProps) => {
  const { data, isLoading } = useListData({initialData});
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
            boxShadow: 'rgb(175 214 255 / 70%) 0px 0px 2px 4px',
          }}
          _focusVisible={{
            outline: 'none',
            borderRadius: 'xl',
            boxShadow: 'rgb(175 214 255 70%) 0px 0px 2px 4px',
          }}
        >
          <Card p={'4'}>
            <Text fontSize={'xl'} fontWeight="bold" color="brand.600">
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
                  color="brand.600"
                  width={{ base: '100px', md: 'inherit' }}
                >
                  Classification
                </Text>
                <Text>{item.classification}</Text>
              </Flex>
              <Flex flex={1} direction={{ base: 'row', md: 'column' }}>
                <Text
                  fontStyle={'italic'}
                  fontWeight="semibold"
                  color="brand.600"
                  width={{ base: '100px', md: 'inherit' }}
                >
                  Designation
                </Text>
                <Text>{item.designation}</Text>
              </Flex>
              <Flex flex={1} direction={{ base: 'row', md: 'column' }}>
                <Text
                  fontStyle={'italic'}
                  fontWeight="semibold"
                  color="brand.600"
                  width={{ base: '100px', md: 'inherit' }}
                >
                  Homeworld
                </Text>
                {item.homeworld?.name ? (
                  <Text>{item.homeworld?.name}</Text>
                ) : (
                  <Text color={'red.400'} fontStyle={'italics'}>
                    ???
                  </Text>
                )}
              </Flex>
            </Stack>
          </Card>
        </ListItem>
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
