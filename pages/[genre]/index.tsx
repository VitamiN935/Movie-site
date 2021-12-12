import React, {useEffect} from 'react';
import ScrollBarGenre from "@/components/home&genre/ScrollBarGenre";
import GridMovies from "@/components/home&genre/GridMovies";
import MainLayout from "@/components/layouts/MainLayout";
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {IResponseMoviesByFiltersOrTop} from "#/responseTypes";
import {MovieService} from "@/api/MovieService";
import {ParsedUrlQuery} from "querystring";
import {DATA_FILTERS} from "@/const/dataFilters";
import FooterLayout from "@/components/layouts/FooterLayout";
import moviesState from "@/store/MoviesState";
import {observer} from "mobx-react-lite";
import BarSortFilters from "@/components/home&genre/BarSortFilters";

interface IGenrePageProps {
  responseResult: IResponseMoviesByFiltersOrTop
}

const GenrePage: NextPage<IGenrePageProps> = ({responseResult}) => {
  useEffect(() => {
    moviesState.setMovies(responseResult.films)
    return () => moviesState.reset()
  }, [responseResult.films])
  const filteredMovies = moviesState.filteredMovies

  return (
    <MainLayout>
      <FooterLayout>
        <main>
          <ScrollBarGenre/>
          <BarSortFilters/>
          <GridMovies movies={filteredMovies}/>
        </main>
      </FooterLayout>
    </MainLayout>
  );
};

export default observer(GenrePage);

interface IParams extends ParsedUrlQuery {
  genre: string
}

export const getStaticProps: GetStaticProps<IGenrePageProps, IParams> = async (context) => {
  try {
    const {genre} = context.params!
    const filterItem = DATA_FILTERS.genres.find(item => item.title === genre)!
    const responseResult = await MovieService.getMoviesByFilters({genre: filterItem.id, page: 1})

    return {
      props: {
        responseResult
      }
    }
  } catch (e) {
    return {
      notFound: true
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}