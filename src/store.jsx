// store.js

import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, PERSIST } from "redux-persist";
import storage from "redux-persist/lib/storage";
import swift from './Components/store/FeaturesSlice';

const persistConfig = {
  key: "root",
  storage,
};

const persisitedReducer = persistReducer(persistConfig, swift);

export const store = configureStore({
  reducer: { persisitedReducer },
  middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [PERSIST],
            },
        }),
});

// const store = configureStore({
//   reducer: {
//     swift: swift,
//     // Add other slice reducers here
//   },
// });

export default store;
