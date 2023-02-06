import { configureStore } from '@reduxjs/toolkit'; 
import bookReducer from '../features/addBookSlice';
import goalReducer from '../features/addGoalSlice'; 
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk'; 
import { combineReducers } from '@reduxjs/toolkit';


const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({book: bookReducer, goal: goalReducer})


const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})

export const persistor = persistStore(store)