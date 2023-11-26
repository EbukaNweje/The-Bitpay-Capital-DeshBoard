// counterSlice.js

import { createSlice } from '@reduxjs/toolkit';

const swift = createSlice({
  name: 'swift',
  initialState: {
    idValue: '',
    user: {},
  },
  reducers: {
    setIdValue(state, action) {
      state.idValue = action.payload;
      },
      swiftUserData(state, {payload}) {
        state.user = payload;
        console.log("Redux User data", payload);
        },
  },
});

export const { setIdValue, swiftUserData } = swift.actions;
export default swift.reducer;
