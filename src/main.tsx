import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App.tsx'
import ArticleDetailPage from './Pages/ArticleDetails.tsx';
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <Toaster position="top-right" />

        <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/article/:id" element={<ArticleDetailPage />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  </StrictMode>
);
