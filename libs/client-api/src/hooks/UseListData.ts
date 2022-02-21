import {
  useQuery,
} from "react-query";
import { request, gql } from "graphql-request";
import { config } from '../ClientAPIProvider';
import { ListSpecies } from "@sample-nx/shared-types";

export const useListData = () => {
  return useQuery("posts", async () => {
    const response = await request<{ allSpecies: ListSpecies }>(
      config.endpoint,
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
    );
    return response;
  });
}
