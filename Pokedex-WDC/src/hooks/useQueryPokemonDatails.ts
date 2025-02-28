import { API } from "../configs/api";
import { useQuery } from "@tanstack/react-query";
import { Pokemon } from "../@types/pokemon";

async function getPokemonDetails(name: String) {
  const { data } = await API.get(`/pokemon/${name}`);

  return data as Pokemon;
}
export function useQueryPokemonDetails(name: String) {
  const query = useQuery({
    queryKey: ["getPokemonDetails", name],
    queryFn: () => getPokemonDetails(name),
  });
  return query;
}
