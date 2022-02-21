import {
  useQuery,
} from "react-query";
import { ListSpecies } from "@sample-nx/shared-types";
import { fetchAllSpecies } from "../api/allSpecies";

export interface useListDataProps{
  initialData?:ListSpecies
}

export const useListData = ({initialData}:useListDataProps) => {
  return useQuery("posts",fetchAllSpecies,{initialData:initialData && {allSpecies:initialData}});
}
