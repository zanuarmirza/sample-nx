import { Box, Stack, Text } from '@chakra-ui/react';
import { Species } from '@sample-nx/shared-types';

export interface SpeciesItemProp {
  species: Species;
}

const SpeciesItem = ({ species }) => {
  return (
    <Stack mt="10">
      <Box>
        <Text color="yellow.400" fontWeight={'medium'} fontSize="md">
          Average Height
        </Text>
        <Text color="white">{species.averageHeight}</Text>
      </Box>
      <Box>
        <Text color="yellow.400" fontWeight={'medium'} fontSize="md">
          Average Lifespan
        </Text>
        <Text color="white">{species.averageLifespan}</Text>
      </Box>
      <Box>
        <Text color="yellow.400" fontWeight={'medium'} fontSize="md">
          Classification
        </Text>
        <Text color="white">{species.classification}</Text>
      </Box>
      <Box>
        <Text color="yellow.400" fontWeight={'medium'} fontSize="md">
          Designation
        </Text>
        <Text color="white">{species.designation}</Text>
      </Box>
      <Box>
        <Text color="yellow.400" fontWeight={'medium'} fontSize="md">
          Eye Colors
        </Text>
        <Text color="white">{species.eyeColors.join(',')}</Text>
      </Box>
      <Box>
        <Text color="yellow.400" fontWeight={'medium'} fontSize="md">
          Hair Colors
        </Text>
        <Text color="white">{species.hairColors.join(',')}</Text>
      </Box>
      <Box>
        <Text color="yellow.400" fontWeight={'medium'}>
          Homeworld
        </Text>
        {species.homeworld?.name ? (
          <Text color="white">{species.homeworld?.name}</Text>
        ) : (
          <Text color={'red.400'} fontStyle={'italics'}>
            ???
          </Text>
        )}
      </Box>
    </Stack>
  );
};
export default SpeciesItem;
