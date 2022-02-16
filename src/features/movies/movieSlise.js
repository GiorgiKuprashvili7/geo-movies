import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import movieApi from '../../common/apis/movieApi'
import { APIkey } from '../../common/apis/MovieApiKey'

export const fetchAsyncmovies = createAsyncThunk(
  'movies/fetchAsyncMovies',
  async (searchValue) => {
    const response = await movieApi
      .get(`?apiKey=${APIkey}&s=${searchValue}&type=movie`)
      .catch((err) => console.log(err))

    return response.data
  }
)

export const fetchAsyncShows = createAsyncThunk(
  'movies/fetchAsyncShows',
  async (searchValue) => {
    const response = await movieApi
      .get(`?apiKey=${APIkey}&s=${searchValue}&type=series`)
      .catch((err) => console.log(err))

    return response.data
  }
)

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  'movies/fetchAsyncMovieOrShowDetail',
  async (id) => {
    const response = await movieApi.get(`?apiKey=${APIkey}&i=${id}&plot=full`)

    return response.data
  }
)

const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
  loading: true,
}

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectedMovieOrShow = {}
    },
  },
  extraReducers: {
    [fetchAsyncmovies.pending]: () => {},
    [fetchAsyncmovies.fulfilled]: (state, { payload }) => {
      return { ...state, movies: payload }
    },
    [fetchAsyncmovies.rejected]: (state, { payload }) => {
      console.log('rejected')
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      return { ...state, shows: payload }
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      return { ...state, selectedMovieOrShow: payload, loading: false }
    },
  },
})

export const { addMovies, removeSelectedMovieOrShow } = movieSlice.actions
export const getLoadingState = (state) => state.movies.loading
export const getAllmovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getSelectedMovieOrShow = (state) =>
  state.movies.selectedMovieOrShow

export default movieSlice.reducer
