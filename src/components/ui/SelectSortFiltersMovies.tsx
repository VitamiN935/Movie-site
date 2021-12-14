import React, {ChangeEvent, FC} from 'react';
import {SortType} from "#/filtersTypes";
import MoviesState from "@/store/MoviesState";
import {observer} from 'mobx-react-lite';
import {useAuth} from "@/contexts/AuthContext";

interface SelectSortFiltersMoviesProps {
  className?: string
}

const SelectSortFiltersMovies: FC<SelectSortFiltersMoviesProps> = ({className}) => {
  const {user} = useAuth()
  const changeFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    // @ts-ignore
    MoviesState.setFilter(e.target.value)
  }

  return (
    <select
      value={MoviesState.filter}
      onChange={changeFilter}
      className={`p-2 rounded-md w-full
      focus:border-primary-light focus:outline-none focus:rounded-b-none cursor-pointer ${className || ''}`}
    >
      <option value={SortType.DEFAULT}>
        Все
      </option>
      <option value={SortType.NAME}>
        По названию
      </option>
      <option value={SortType.YEAR}>
        По годам
      </option>
      <option value={SortType.RATING}>
        По рейтингу
      </option>
      {user && <option value={SortType.FAVORITE}>
        Избранные
      </option>}
    </select>
  );
};

export default observer(SelectSortFiltersMovies);