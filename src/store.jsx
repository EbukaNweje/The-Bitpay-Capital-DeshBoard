// store.js

import { configureStore } from '@reduxjs/toolkit';
import swift from './Components/store/FeaturesSlice';

const store = configureStore({
  reducer: {
    swift: swift,
    // Add other slice reducers here
  },
});

export default store;
