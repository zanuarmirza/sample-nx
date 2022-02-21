import { Species } from "@sample-nx/shared-types";
import {
  useQuery,
} from "react-query";
import { findSpecies } from "../api/species";
export interface useItemDataProps{
  initialData?:Species
}

export const useItemData = (id: string) => {
  return useQuery( ['species', id], ()=>findSpecies(id));
}
