import { createAsyncThunk } from "@reduxjs/toolkit";

//Generates pending, fulfilled and rejected action types
export const getData = createAsyncThunk(
  "main/getData",
  async (req, thunkAPI) => {
    try {
      let buildings = [];
      let meetingRooms = [];
      const {
        data: { Buildings },
      } = await client.query({ query: GET_BUILDINGS });
      if (Buildings) buildings = Buildings;
      const {
        data: { MeetingRooms },
      } = await client.query({
        query: GET_MEETING_ROOMS,
        fetchPolicy: "no-cache",
      });
      if (MeetingRooms) meetingRooms = MeetingRooms;

      return { buildings, meetingRooms };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
