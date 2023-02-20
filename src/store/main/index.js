import { createSlice } from "@reduxjs/toolkit";
import { getData } from "./action.creator";

const initialState = {
  buildings: [{name:'Building 1'}],
  meetingRooms: [],
  isLoading: true,
  error: null,
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.buildings = action.payload.buildings;
      state.meetingRooms = action.payload.meetingRooms;
    });
    builder.addCase(getData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { fetchData } = mainSlice.actions;
export default mainSlice.reducer;
