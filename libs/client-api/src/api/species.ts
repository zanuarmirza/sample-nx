import { Species } from "@sample-nx/shared-types";
import { request, gql } from "graphql-request";
import { config } from '../ClientAPIProvider';
const findSpecies = async (id:string) => {
  const endpoint = config.endpoint ||process.env.GRAPHQL_ENDPOINT
  const response = await request<{ species: Species }>(
    endpoint,
    gql`
      query species($id: ID!) {
        species(id: $id) {
          id
          name
          classification
          homeworld {
            name
          }
          designation
          averageHeight
          averageLifespan
          eyeColors
          hairColors
          skinColors
          language
        }
      }
    `,
    { id: id }
  );
  return response;
}

export {
  findSpecies
}
