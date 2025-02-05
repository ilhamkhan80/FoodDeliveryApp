import { createSlice } from '@reduxjs/toolkit'

export const restauranetSlice = createSlice({
  name: 'restauranet',
  initialState: {
    restauranet: null
  },
  reducers: {
    // increment: state => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1
    // },
    // decrement: state => {
    //   state.value -= 1
    // },
    setRestauranet: (state, action) => {
      state.restauranet = action.payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const {setRestauranet} =restauranetSlice.actions
export const selectRestauranet=state=>state.restauranet.restauranet;

export default restauranetSlice.reducer