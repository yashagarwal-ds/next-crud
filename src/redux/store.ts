import {createStore} from "redux";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import storage from 'redux-persist/lib/storage';
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['apiUserSlice'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({reducer : persistedReducer, devTools : true});

const persistor = persistStore(store);

export {persistor, store};