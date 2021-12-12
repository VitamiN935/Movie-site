import React, {FC} from 'react';
import GenreItem from "@/components/home&genre/GenreItem";
import {FiltersState} from "@/store";
import {observer} from "mobx-react-lite";
import {IFilterGenre} from "#/filtersTypes";

const ScrollBarGenre: FC = () => {
  const allGenres: IFilterGenre[] = FiltersState.allGenres
  return (
    <div className="relative">
      <ul className="pt-4 px-8 flex xl:space-x-16 space-x-10 overflow-x-scroll scrollbar-hide ">
        {allGenres.map(genre => (
          <GenreItem
            key={genre.id}
            item={genre}
          />
        ))}
      </ul>
      <div className="absolute right-0 top-0 h-14 w-1/12 bg-gradient-to-l from-primary-dark"/>
    </div>
  );
};

export default observer(ScrollBarGenre);