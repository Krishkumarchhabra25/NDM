import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllArticle as apiGetAllArticle,
  getAllArticleById as apiGetAllArticleById,
} from "../services/api.service";
import type { Article } from "../types/article.types";

interface ArticleState {
  articles: Article[];
  selectedArticle: Article | null;
  loading: boolean;
  error: string | null;
}

const initialState: ArticleState = {
  articles: [],
  selectedArticle: null,
  loading: false,
  error: null,
};

// Get All
export const getAllArticles = createAsyncThunk<Article[]>(
  "articles/getAllArticles",
  async (_, { rejectWithValue }) => {
    try {
      return await apiGetAllArticle();
    } catch (err: any) {
      return rejectWithValue(err?.response?.data?.error || "Failed to fetch articles");
    }
  }
);

// Get by ID
export const getAllArticleById = createAsyncThunk<Article, string>(
  "articles/getAllArticleById",
  async (id, { rejectWithValue }) => {
    try {
      return await apiGetAllArticleById(id);
    } catch (err: any) {
      return rejectWithValue(err?.response?.data?.error || "Failed to fetch article by ID");
    }
  }
);

const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllArticles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(getAllArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getAllArticleById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllArticleById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedArticle = action.payload;
      })
      .addCase(getAllArticleById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default articleSlice.reducer;
