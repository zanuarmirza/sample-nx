import { Container, Box, Heading, Stack, Text } from '@chakra-ui/react';
import { BaseLayout } from '@client-app/layouts';
import createNextPage from '@client-app/utils/createNextPage';
import { Species } from '@sample-nx/shared-types';
import { fetchAllSpecies, findSpecies } from '@sample-nx/client-api';
import { GetStaticProps } from 'next';
import { NextPage } from '@client-app/interfaces/next';

const Detail: NextPage<{ species: Species }> = ({ species }) => {
  console.log('species', species);
  return (
    <Container maxW={{ base: 'container.lg', md: 'container.md' }} py="6">
      <Heading>{species.name}</Heading>
      <Heading
        as="h3"
        size="md"
        color={'gray.600'}
      >{`${species.classification} - ${species.designation}`}</Heading>
      <Stack mt="10">
        <Text>averageHeight :{species.averageHeight}</Text>
        <Text>averageLifespan :{species.averageLifespan}</Text>
        <Text>classification :{species.classification}</Text>
        <Text>designation :{species.designation}</Text>
        <Text>eyeColors :{species.eyeColors.join(',')}</Text>
        <Text>eyeColors :{species.hairColors.join(',')}</Text>
        <Box>
          <Text display={'inline'}>
            homeworld :{' '}
          </Text>
          {species.homeworld?.name ? (
              <Text display={'inline'}>{species.homeworld?.name}</Text>
            ) : (
              <Text display={'inline'} color={'red.400'} fontStyle={'italics'}>
                ???
              </Text>
            )}
        </Box>
      </Stack>
    </Container>
  );
};

export async function getStaticPaths() {
  const { allSpecies } = await fetchAllSpecies();

  const paths = allSpecies.species.map((item) => ({
    params: { id: item.id },
  }));

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps<
  { species: Species },
  { id: string }
> = async (context) => {
  const {
    params: { id },
  } = context;
  const response = await findSpecies(id);
  return {
    props: {
      species: response.species,
    },
  };
};

export default createNextPage(Detail, {
  layout: (page) => <BaseLayout>{page}</BaseLayout>,
});
