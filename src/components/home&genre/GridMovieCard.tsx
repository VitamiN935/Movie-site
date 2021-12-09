import React, {FC} from 'react';
import {IMovieForGrid} from "#/movieTypes";
import Image from "next/image";
import Link from 'next/link'
import {useAuth} from "@/contexts/AuthContext";
import Play from "@/components/ui/Play";
import RatingMovie from "@/components/ui/RatingMovie";
import Like from "@/components/ui/Like";

interface IGridMoveItem {
  movie: IMovieForGrid
}

const GridMovieCard: FC<IGridMoveItem> = ({movie}) => {
  const {user} = useAuth()

  return (
    <article
      className="group cursor-pointer transform transition-transform duration-200 sm:hover:scale-105"
    >
      <Link href={`/movies/${movie.movieId}`}>
        <a>
          <div className="relative">
            <Image
              src={movie.posterUrlPreview}
              width={950}
              height={1200}
              layout={"responsive"}
              alt={movie.nameRu}
            />
            <div className="absolute left-0 top-0 full bg-black group-hover:opacity-70 opacity-0">
            </div>
            <Play className="group-hover:opacity-100 opacity-0 flex-center"/>
            {
              movie?.year &&
              <span className="bubble top-2 left-2">
                {movie.year}
              </span>
            }
            {
              movie.rating && <RatingMovie
                rating={movie.rating}
                size={20}
                className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 text-xl"
              />
            }
            <Like
              onClick={() => {
              }}
              className="hover:scale-110 opacity-0 group-hover:opacity-100 absolute right-2 top-2"
              size={32}
            />
          </div>
        </a>
      </Link>
      <div className="mt-2 text-white md:mt-3 flex justify-between">
        <h2 className="font-medium font-bold text-xl xl:text-2xl">
          {movie.nameRu}
        </h2>
      </div>
    </article>
  );
};

export default GridMovieCard;