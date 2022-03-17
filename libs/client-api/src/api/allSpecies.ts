import { ListSpecies } from "@sample-nx/shared-types";
import { request, gql } from "graphql-request";
import { config } from '../ClientAPIProvider';
const fetchAllSpecies = async () => {
  const endpoint = config.endpoint
  const response = await request<{ allSpecies: ListSpecies }>(
    endpoint,
    gql`
      query {
        allSpecies {
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
          totalCount
          species {
            id
            name
            classification
            homeworld {
              name
            }
            designation
          }
        }
      }
    `
  )
  return response;
}

export {
  fetchAllSpecies
}
