import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import movieApi from '../../common/apis/movieApi'
import { APIkey } from '../../common/apis/MovieApiKey'

export const fetchAsyncmovies = createAsyncThunk(
  'movies/fetchAsyncMovies',
  async () => {
    const movieText = 'harry'
    const response = await movieApi
      .get(`?apiKey=${APIkey}&s=${movieText}&type=movie`)
      .catch((err) => console.log(err))

    return response.data
  }
)

export const fetchAsyncShows = createAsyncThunk(
  'movies/fetchAsyncShows',
  async () => {
    const seriesText = 'friends'
    const response = await movieApi
      .get(`?apiKey=${APIkey}&s=${seriesText}&type=series`)
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
}

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload
    },
  },
  extraReducers: {
    [fetchAsyncmovies.pending]: () => {
      console.log('panding')
    },
    [fetchAsyncmovies.fulfilled]: (state, { payload }) => {
      console.log('fullfield')
      return { ...state, movies: payload }
    },
    [fetchAsyncmovies.rejected]: (state, { payload }) => {
      console.log('rejected')
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log('fullfield')
      return { ...state, shows: payload }
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      console.log('fullfield')
      return { ...state, selectedMovieOrShow: payload }
    },
  },
})

export const { addMovies } = movieSlice.actions
export const getAllmovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getSelectedMovieOrShow = (state) =>
  state.movies.selectedMovieOrShow

export default movieSlice.reducer
