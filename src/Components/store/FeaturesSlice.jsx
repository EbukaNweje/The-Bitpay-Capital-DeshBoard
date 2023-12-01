// counterSlice.js

import { createSlice } from '@reduxjs/toolkit';

const swift = createSlice({
  name: 'swift',
  initialState: {
    idValue: '',
    user: {},
    depositData: [],
    withdraw: [],
  },
  reducers: {
    setIdValue(state, action) {
      state.idValue = action.payload;
      },
      swiftUserData(state, {payload}) {
        state.user = payload;
        console.log("Redux User data", payload);
        },

        updateDepositData(state, action) {
          state.depositData.push(action.payload) 
          console.log("FIRST", action.payload);
        //  = [...state.depositData, action.payload]
        },
        
        updatewithdraw(state, action) {
          state.withdraw.push(action.payload) 
          console.log("FIRST", action.payload);
        //  = [...state.depositData, action.payload]
        },
  },
});

export const { setIdValue, swiftUserData, updateDepositData, updatewithdraw } = swift.actions;
export default swift.reducer;
