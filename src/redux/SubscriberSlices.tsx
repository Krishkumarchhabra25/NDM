// redux/slices/subscriberSlice.ts

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { CreateSubscriberResponse, CreateSubscriberRequest, Subscriber } from "../types/Subscribe.types";
import api from "../services/BaseUrl/axiosConfig"; // ✅ adjust path as needed

export const subscribeUser = createAsyncThunk<
  CreateSubscriberResponse, // ✅ Correct full response
  CreateSubscriberRequest,
  { rejectValue: string }
>("subscriber/subscribeUser", async (payload, thunkAPI) => {
  try {
    const response = await api.post<CreateSubscriberResponse>(
      "/subscribe/create-subscribe",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(
      err.response?.data?.message || "Subscription failed"
    );
  }
});

// Initial state
interface SubscriberState {
  subscriber: Subscriber | null;
  loading: boolean;
  error: string | null;
  successMessage: string | null;
}

const initialState: SubscriberState = {
  subscriber: null,
  loading: false,
  error: null,
  successMessage: null,
};

// Slice
export const subscriberSlice = createSlice({
  name: "subscriber",
  initialState,
  reducers: {
    resetSubscriberState: (state) => {
      state.subscriber = null;
      state.loading = false;
      state.error = null;
      state.successMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(subscribeUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(subscribeUser.fulfilled, (state, action) => {
        state.loading = false;
        state.subscriber = action.payload.subscriber;
        state.successMessage = action.payload.message;
      })
      .addCase(subscribeUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export const { resetSubscriberState } = subscriberSlice.actions;

export default subscriberSlice.reducer;