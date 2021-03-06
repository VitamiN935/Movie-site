import { IMovieByFilterOrTop, IMoviePremier, IReview } from 'types';

export interface IResponseMoviesByFiltersOrTop {
  pagesCount: number,
  films: IMovieByFilterOrTop[]
}

export interface IResponseSearchByKeyWord {
  keyword: string,
  pagesCount: number,
  searchFilmsCountResult: number,
  films: IMovieByFilterOrTop[]
}

export interface IResponseMoviesPremieres {
  total: number,
  items: IMoviePremier[]
}

export interface IResponseReviewsByMovie {
  page: number,
  reviewAllCount: number,
  pagesCount: number,
  reviews: IReview[]
}

export interface IResponseTrailer {
  total: number,
  items: [
    {
      url: string,
      name: string,
      site: string
    }
  ]
}
