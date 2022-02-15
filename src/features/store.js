import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './movies/movieSlise'

export const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
})
