import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./ArticleSlice";
import videoReducer from "./VideoSlices"
import subcribeReducer from "./SubscriberSlices"

export const store = configureStore({
  reducer: {
    articles: articleReducer,
    video: videoReducer,
    subscriber:subcribeReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
