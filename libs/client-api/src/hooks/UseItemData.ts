import {
  useQuery,
} from "react-query";
import { request, gql } from "graphql-request";
import { config } from '../ClientAPIProvider';
import { Species } from "@sample-nx/shared-types";

export const useItemData = (id: string) => {
  return useQuery( ['species', id], async () => {
    const response = await request<{ species: Species }>(
      config.endpoint,
      gql`
        query {
          species($id: String!) {
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
  });
}
