import { IStaffByMovie } from 'types';

export default function getActorsFromList(
  persons: IStaffByMovie[],
  limit: number,
) {
  const actors = persons.filter((person) => person.professionKey === 'ACTOR' && person.nameRu) || []

  return actors.length > limit ? actors.slice(0, limit) : actors
}
