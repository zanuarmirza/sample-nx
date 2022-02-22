import { Container, Heading } from '@chakra-ui/react';
import { NextPage } from '@client-app/interfaces/next';
import { BaseLayout } from '@client-app/layouts';
import SpeciesItem from '@client-app/module/species/SpesiesItem';
import createNextPage from '@client-app/utils/createNextPage';
import { fetchAllSpecies, findSpecies } from '@sample-nx/client-api';
import { Species } from '@sample-nx/shared-types';
import { GetStaticProps } from 'next';

const Detail: NextPage<{ species: Species }> = ({ species }) => {
  return (
    <Container maxW={{ base: 'container.lg', md: 'container.md' }} py="6">
      <Heading
        color="black"
        textShadow={
          '-1px -1px 0 #ECC94B, 1px -1px 0 #ECC94B, -1px 1px 0 #ECC94B, 1px 1px 0 #ECC94B'
        }
      >
        {species.name}
      </Heading>
      <Heading
        as="h3"
        size="md"
        color={'gray.400'}
      >{`${species.classification} - ${species.designation}`}</Heading>
      <SpeciesItem species={species} />
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
