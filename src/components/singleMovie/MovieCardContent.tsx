import React, { FC } from 'react';
import { ISingleMovie, IStaffByMovie } from 'types';
import { MovieDescription, RatingTable } from '@/components/singleMovie';

interface IMovieCardContent {
  movie: ISingleMovie,
  staff: IStaffByMovie[]
}

const MovieCardContent: FC<IMovieCardContent> = ({ movie, staff }) => (
  <div className="mt-2 w-full">
    <h1 className="font-bold text-2xl mb-4">
      {movie.nameRu}
    </h1>
    <div className="text-sm md:flex md:flex-wrap md:justify-between md:items-start">
      <ul className="md:mr-6 space-y-1">
        <li>
          <span className="font-medium mr-1">
            Название:
          </span>
          <span className="text-gray-color">
            {movie.nameRu}
          </span>
        </li>
        <li>
          <span className="font-medium mr-1">
            Год выхода:
          </span>
          <span className="text-gray-color">
            {movie.year}
          </span>
        </li>
        <li>
          <span className="font-medium mr-1">
            Cтрана:
          </span>
          <span
            className="text-gray-color"
          >
            {movie.countries.map((county) => county.country).join(', ')}
          </span>
        </li>
        <li>
          <span className="font-medium mr-1">
            Оригинальное название:
          </span>
          <span className="text-gray-color">
            {movie.nameOriginal}
          </span>
        </li>
      </ul>
      <RatingTable
        className="grid-cols-2 gap-y-4 gap-x-7 my-4"
        movie={movie}
      />
      <MovieDescription
        movie={movie}
        staff={staff}
      />
    </div>
  </div>
);

export default MovieCardContent;
