import {
  Container, Heading
} from '@chakra-ui/react';
import { BaseLayout } from '@client-app/layouts';
import { ListSpeciesItem } from '@client-app/module/species';
import createNextPage from '@client-app/utils/createNextPage';
import { ListSpecies } from '@sample-nx/shared-types';
import { fetchAllSpecies } from '@sample-nx/client-api';
import { NextPage } from 'next';

const Home:NextPage<{listSpecies:ListSpecies}> = ({listSpecies}) => {

  return (
    <Container maxW={{ base: 'container.lg', md: 'container.md' }} py="6">
      <Heading>Star Wars Species</Heading>
      <ListSpeciesItem initialData={listSpecies}/>
    </Container>
  );
};
export async function getStaticProps() {
  const response = await fetchAllSpecies()
  return {
    props: {
      listSpecies:response.allSpecies,
    },
  }
}

export default createNextPage(Home, {
  layout: (page) => <BaseLayout>{page}</BaseLayout>
});
