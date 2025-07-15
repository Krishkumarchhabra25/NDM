import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {

  getAllVideos as apiGetAllVideos,
 
} from "../services/api.service";
import type { Video } from "../types/video.types";


interface VideoState {
  videos: Video[];
  loading: boolean;
  error: string | null;
}

const initialState: VideoState = {
  videos: [],
  loading: false,
  error: null,
};



// 🔄 Get All
export const getAllVideos = createAsyncThunk<Video[]>(
  "videos/getAllVideos",
  async (_, { rejectWithValue }) => {
    try {
      return await apiGetAllVideos();
    } catch (err: any) {
      return rejectWithValue(err?.response?.data?.error || "Failed to fetch videos");
    }
  }
);



const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // Get All
      .addCase(getAllVideos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.videos = action.payload;
      })
      .addCase(getAllVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

     
  },
});

export default videoSlice.reducer;
